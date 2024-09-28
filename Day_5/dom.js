//Document objest model(.getById , .getByClassName, ByTageName)


// document.getElementById('para').innerText='Welcom To Dom'; //innerText methode..


// document.querySelector("#para").innerText="Welcome to queryselecter";

// innerText & innerHtml

// document.querySelector("#para").innerText="<h1>hello</h1>";
// document.querySelector("#para").innerHTML="<h1>hello</h1>";



// ..................  Form
// function get() {

//     let usermail = document.getElementById("mail").value;
//     let password = document.getElementById("pass").value;

//     alert(usermail+ "/n" + password)
// }




//......................addEventLeistner onclick

// let result = document.getElementById("btn");
// function hello(event) {
//     alert("hello");

// }
// result.addEventListener("click", hello)



//===========================double click



// let a = document.getElementById("btn");
// function hello(event) {
//     alert("double click");

// }
// a.addEventListener("dblclick", hello);





// let b=document.getElementById("btn");

// function hi(event){
//     alert("mouseover")
// }


// b.addEventListener("mouseover",hi);



// let c=document.getElementById("btn");

// function by(event){
//     event.preventDefault()
//     alert("right click here")
// }


// c.addEventListener("contextmenu",by);



let element=document.createElement('h1');

let elements=document.createTextNode("hello");
console.log(element.appendChild(elements))