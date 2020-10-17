var express = require('express');
var router = express.Router();
var cors = require('cors');
var app = express();
app.use(cors())



// db
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'JS_121'
})

connection.connect()







/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: "JS_121"} )
});

router.post('/', (req, res) => {
  res.send("ba POST umadi")
})

router.get('/getstudents', (req, res) => {
  connection.query('SELECT * FROM students', (err, result) => {
    res.send(result)
  })
})


router.get('/getSuccess', (req, res) => {
  connection.query('SELECT * FROM students WHERE score > 80', (err, result) => {
    res.send(result)
  })
})

router.post('/addstudent', (req,res) => {
  res.header("Access-Control-Allow-Origin", "*");  
  connection.query(`INSERT INTO students (name,family,score) VALUES ('${req.body.name}', '${req.body.family}', '${req.body.score}')`, (err,result) => {
    res.send(result)
  })
})


module.exports = router;
