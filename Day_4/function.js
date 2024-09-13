

//   01

function intro() {
    alert("Hello..")
};
// first function 

// intro();



//  02

function calcReactArea(widht, height) {

    return widht * height

};

// with prameters
const result = calcReactArea(5, 5);
// console.log(result);






//  03

function introductionMe(userName, Proffesion, Age) {

    console.log(`My Name is ${userName}`);
    console.log(`I am a ${Proffesion}`);
    console.log(`I am ${Age}`);


};


// const userName=prompt("Enter Your Name..");
// const Proffesion=prompt("Enter Your Profession..");
// const Age=prompt("Enter Your Age..");

// introductionMe(userName , Proffesion , Age);







//   NOTE:
// Primitive Types (e.g., numbers, strings): Functions mein by value pass hoti hain, matlab function ke andar ki changes asal variable par asar nahi karte.

//Objects/Arrays: Functions mein by reference pass hoti hain, matlab function ke andar ki changes asal object ya array par asar karti hain.

function myCars(obj) {

    return obj.color = "gray";



}

const cars = {
    make: "honda",
    model: 2009,
    color: "black",

};

const e = myCars(cars);

console.log(e);