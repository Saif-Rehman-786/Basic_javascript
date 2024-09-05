      const person1 = {fname:"John", lname:"Doe", age:25};
        
        let text="";

        for (const x in person1) {
            if (Object.prototype.hasOwnProperty.call(person1, x)) {
                const element = person1[x];
                text+=element;

                document.getElementById('demo').innerHTML=text;
            }

        }
        
                
        
        
        
        const person = {fname:"John", lname:"Doe", age:25};

        for (const key in person) {
           
                
                console.log(key+" : "+person[key])
            }