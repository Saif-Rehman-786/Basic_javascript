
        //A javascript function in block of code designed to perform a particuler task.A javascript function is excuted when "somthing" invokes it (callit).


        //witout parameter
        //with parameter
        //with return 
        //without return 





        function add_Number() {

            console.log("Add two number..", 5 + 5);

        }

        // add_Number()







        // ================================================02.with parameters



        function sum_number(a = 5, b = 10) {

            console.log("Add to number..", a + b);

        }

        // sum_number();




        //===============================================second methode



        function sum_Second(num1, num2) {

            console.log(num1 * num2)

        }
        // sum_Second(5,5);





        //============================================use of return statments

        function product_Number(a, b) {
            return a * b;

        }

        // let result = product_Number(5, 15)
        // console.log(result)




        //==============================return statments with codional sataments

// function product_Items(num1,num2){

//     return num1/num2


// }
// let store=product_Items(1200,3000);     

// if (store===0.4) {
    
//     console.log("right division..");
// }else{
//     console.log("wrong..")
// }



let fname="saifUrRehman";

for(let i=0; i<fname.length;i++){
    console.log(fname[i]);
};







