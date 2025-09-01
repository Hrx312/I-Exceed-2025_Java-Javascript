"use strict";
const student={
    name:"Harsh",
    greetings:function()
    {
        console.log(`Welcome Mr ${this.name}`);
    }
};

//setTimeout(student.greetings,1000);
 
// setTimeout(function(){
//  student.greetings();  
// },2000);

// setTimeout(()=>student.greetings(),2000);

let greet=student.greetings.bind(student);
setTimeout(greet,2000);
