// prototype is property avaailbale to every obj -> 
// help it's instances to get those 
Array.prototype.sayHi =function(){
    console.log("Hi your length will Be ",this.length);

}
Array.myMethod=function(){
    console.log("Hi your length will Be ");
}
const arr=[1,2,3,4];
arr.myMethod();
// const arr2=[1,2,4,5,5,6];
// arr.sayHi();
// arr2.sayHi();


// //  create -> use this and mymap -> HW 
// Array.prototype.MyMap=function(cb){

// }