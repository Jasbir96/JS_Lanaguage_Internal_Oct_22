// let a=10;
// console.log(a);
// function fn(){
// let b=10;
// console.log(b);
// }
// fn();
// -> remains same for every function
// console.log(global);
// this -> will be  always be determined

// 1. incase of your nodejs -> GEC-> this will be -> {}
// console.log(this);
// function fn(){
//     console.log(this);
//     console.log(this==global);

// }
// //2 when fn is called -> this will be determined -> global object
// fn();
// const cap={
//     name:"Steve",
//     sayHi:function(){
//         console.log(this.name);
//     }

// }
// // 3 -> when a method call is done -> this will be determined-> that object
// globalThis.name="loki";
// cap.sayHi();
// const cap = {
//     name: "Steve",
//     sayHi: function () {
//         console.log(this.name);
//     }
// }
// global.name = "loki";
// let AddrSayHi = cap.sayHi;
// this is determined -> function this will be global -> 
// AddrSayHi();



// 1. incase of your nodejs -> GEC-> this will be -> {}
// //2 when fn is called -> this will be determined -> global object
// // 3 -> when a method call is done -> this will be determined-> that object

// const cap = {
//     name: "Steve",
//     sayHi: function () {
//         console.log("53",this.name);
//         function iAmInner() {
//             console.log("55",this.name);
//         }
//         console.log("Before calling inner");
//         iAmInner();
//         console.log("59", this.name);

//     }
// }
// global.name = "loki";
// cap.sayHi();
//4  this with arrow  -> arrow function doen't have it's own -> it takes from outer scope -> lexical
const cap = {
    name: "Steve",
    sayHi:  ()=> {
        console.log("53", this);
        const iAmInner= ()=> {
            console.log("55", this);
        }
        console.log("Before calling inner");
        iAmInner();
        console.log("59", this);
    }
}
global.name = "loki";
cap.sayHi();
console.log(this);
