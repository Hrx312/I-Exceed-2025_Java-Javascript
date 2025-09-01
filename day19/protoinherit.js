//Prototypal Inheritance
 
let parent={
    name:"harsh",
    calculateAge:function(dob)
    {
        this.dob=dob;
        console.log(new Date().getFullYear()-this.dob);
    },
    qualification:"B.Tech",
};
 
let child={
    name:"raj",
    __proto__:parent,
   
 
};
 
let quali={
    __proto__:child,
}
// child.__proto__=parent;
 
child.calculateAge(2002);
console.log(quali.qualification);
 
 