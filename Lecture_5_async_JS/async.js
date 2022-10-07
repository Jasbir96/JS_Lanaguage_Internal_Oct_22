// console.log("Before");
// //  this thing delay our execution
// setTimeout(()=>{
//     console.log("I will run after some time");
// },2000);
// // it allows the after it execute
// console.log("After");

// 1. if enviornment -> says that a particularfn is asynchronous in nature -> then it will
//  invoked on your call but it will executing in NodeAPI.
// 2. every coe that written in js will always executes in the call stack

// console.log("Before");
// setTimeout(()=>{
//     console.log("I will run after some time");
// },1000);
// console.log("After");
// // infinite loop
// while(true){
// }

let a=true;
console.log("Before");
setTimeout(()=>{
    a=false;
    console.log("I broke the while loop");
},1000);
console.log("After");
// infinite loop
while(a){
}



