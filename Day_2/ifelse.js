    // 1. Write a JavaScript program that displays the largest integer among two integers.


    let a=prompt("Enter Your First Number..");
    
    let b=prompt("Enter Your Second Number..");
    
    if (a>b) {
        console.log("a is greater than b..");
        
    } else {
        console.log("b less than equal to a..");
    }



    // 02.Find the odd number

    let num = prompt("Enter Your Number...");

    if (num % 2 == 0){
      alert("This is a even Number and Positive Number.");
    }
    else if(num % 2 != 0){
      alert("This is odd Number and Negitve Number.");
    }
    else{
      alert("Please Enter Your Correct Number");
    };














     let value = prompt('Enter Your Percentage..')
    
    let grade = value;
    
    if (grade > 90 && grade < 99) {
      for (let i = 0; i < 10; i++) {
        console.log(" Exellent : A+1 grade")
    
      }
    }
    else if (grade > 80 && grade < 89) {
      alert(`Very Good : A Grade`)
    }
    else if (grade > 70 && grade < 79) {
      alert(`Good : B Grade`)
    }
    else if (grade > 60 && grade < 69) {
      alert(`Nice : C Grade`)
    }
    else if (grade > 50 && grade < 59) {
      alert(`Nice : D Grade`)
    }
    else if (grade > 40 && grade < 49) {
      alert(`Keep It Up : E Grade`)
    }
    else if (grade > 40 && grade < 49) {
      alert(`Fair : `)
    }
    else if (grade > 30 && grade < 39) {
      alert(`Fail :`)
    }
    else {
      alert("Wrong")
    }
    for (let i = 0; i <= 100; ) {
      console.log(i)
      i++
    };

