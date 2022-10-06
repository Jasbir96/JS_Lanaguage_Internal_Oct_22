//  new -> laguages 
// function constructor
function Person (name,age){
this.name=name
this.age=age;
this.getName=function () {
    console.log("Hi i am ",this.name);
}
}
const p1= new Person("Jasbir",20);
// console.log("p1",p1);
p1.getName()