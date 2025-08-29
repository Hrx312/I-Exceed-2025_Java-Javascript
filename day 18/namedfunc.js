let sayHi=function display(who)
{
  if(who) {
   console.log(`welcome ${who}`);
  }
  else{
   display("Guest");
  }
}
sayHi("Sathishsivam");


// The problem with that code is that sayHi may change in the outer code. If the function gets assigned to another variable instead, the code will start to give errors:

// let sayHi=function (who)
// {
//   if(who)
//   {
//    console.log(`welcome ${who}`);
//   }
//   else{
//    sayHi("Guest");
//   }
// }
 
// let welcome=sayHi();
// welcome("Harsh");