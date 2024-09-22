//Document objest model(.getById , .getByClassName, ByTageName)


// document.getElementById('para').innerText='Welcom To Dom'; //innerText methode..


// document.querySelector("#para").innerText="Welcome to queryselecter";

// innerText & innerHtml

// document.querySelector("#para").innerText="<h1>hello</h1>";
// document.querySelector("#para").innerHTML="<h1>hello</h1>";



// ..................  Form
function get() {

    let usermail = document.getElementById("mail").value;
    let password = document.getElementById("pass").value;

    alert(usermail+ "/n" + password)
}