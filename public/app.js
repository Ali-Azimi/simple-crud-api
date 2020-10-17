

// ajax

const showAllStudents = ()=> {
      let req = new XMLHttpRequest();
      req.open("GET","http://localhost:3000/getstudents");
      req.addEventListener("load", ()=> {
            getData(req)
      });
      req.send();
}

const showSuccess = ()=> {
      let req = new XMLHttpRequest();
      req.open("GET","http://localhost:3000/getSuccess");
      req.addEventListener("load", ()=> {
            getData(req)
      });
      req.send();
}

const getData = (req) => {
      let res = req.responseText;
      res = JSON.parse(res)
      let tmpl = document.getElementById("template").innerHTML;
      let output = Mustache.render(tmpl, {data: res})
      root.innerHTML = output;
}




let all = document.querySelector("button.all")
let success = document.querySelector("button.success")
let failur = document.querySelector("button.failur")
all.addEventListener("click", showAllStudents);
success.addEventListener("click", showSuccess);

let root = document.getElementById("root");




function addStudent(e) {
      e.preventDefault();
      let student = {
            name: document.getElementById("name").value,
            family: document.getElementById("family").value,
            score: document.getElementById("score").value,
      }
      student = JSON.stringify(student)
      let req = new XMLHttpRequest();
      req.open("POST", "http://localhost:3000/addstudent");
     
      req.setRequestHeader('Content-Type', 'application/json')
      req.send(student);


      req.addEventListener("readystatechange", () => {
                  showAllStudents(); 
      }
      )
}



console.log("کاشت")
setTimeout(()=> {console.log("داشت"),500})
console.log("برداشت")




// template engine