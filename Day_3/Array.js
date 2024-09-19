let x=[1,2,4,5,6,8,7,9,11,15,14];  //array index start number at 0

console.log(x);

console.log(typeof x); //check the data type array object

console.log(x.length); //array length ans 11

console.log(x.toString()); //to display comma-seprat method








const fruits=["apple","graps","dates","mango","bannana","orange"];

fruits[3] ="almonds"//changing an array

console.log(fruits[3]) //use the value in array type index





// array and loop use 

const cars=["Volvo","Suzuki","Audi","Saab","Bmw","Audi","Benze"];


for(let i=0; i<cars.length;){
    const result=cars;
    i++;
    console.log(result[i]);
}




// second method for of loop use 
for (const element of cars) {
    console.log(element)
    
};


const friends=['akram','asif','shouib','atif','khuram'];

let i=0;

while (i<friends.length) {
    console.log(friends[i]);
    i++;
    
}



