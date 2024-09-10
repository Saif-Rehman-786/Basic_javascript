

//   01

function intro() {
    alert("Hello..")
};
// first function 

// intro();



//  02

function calcReactArea(widht,height){

    return widht*height

};

// with prameters
const result =calcReactArea(5,5);
// console.log(result);






//  03

function introductionMe(userName , Proffesion , Age){

console.log(`My Name is ${userName}`);
console.log(`I am a ${Proffesion}`);
console.log(`I am ${Age}`);


};


const userName=prompt("Enter Your Name..");
const Proffesion=prompt("Enter Your Profession..");
const Age=prompt("Enter Your Age..");

introductionMe(userName , Proffesion , Age);
