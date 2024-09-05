
//01. user table input number and show table result


let table=prompt("Enter Table Digit...");

for (let i=1; i<=10;i++){
    console.log(table+ "x" +i+"=" +(i*table))
}






// while loop 

let num=1;

while (num <= 10) {
    console.log(num);
    num++;
    
    
}
console.log('program ended')




// use the for of loop
const arr=["Volvo", "Thar","Suzuki","Fortuner","Cultus","Mercedese"];

for (const element of arr) {
    console.log(element)

}




// Write a JavaScript program that displays the largest integer among two integers.
let a=prompt("Enter Your First Number..");

let b=prompt("Enter Your Second Number..");

if (a>b) {
    console.log("a is greater than b..");
    
} else {
    console.log("b less than equal to a..");
};




// 04. const x=["Volvo", "Thar","Suzuki","Fortuner","Cultus","Mercedese"];


for(i=0; i<10;i++)
{
  console.log(x)
};




//emmpty variable store the value

const cars=["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text="";

for(let i=0; i<cars.length;i++){
   text+= (cars[i])+"<br>";
}
document.getElementById('demo').innerHTML=text;

