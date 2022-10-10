//  function are also obj
//  closure -> function will have access to it's 
// lexical scope even if outer function is removed from the stack  
// function getFirstName(firstName){
//     return  function getLastName(lastName){
//         console.log("In getLast Name",firstName)
//         return function printFullName(){
// console.log("Hi, " , firstName , lastName);
//         }
//     }
// }
//  let getLastName=getFirstName("James");
//  console.log("Hi*******");
//  let printFullName=getLastName("Snow");
// console.log("Hi*******");

//  printFullName();
// console.log("Hi*******");

// function createCounter(init, delta) {

//     function count() {
//         init = init + delta
//         return init
//     }
//     return count
// }

// let c1 = createCounter(10, 5)
// let c2 = createCounter(5, 2)
// console.log(c1()) 
// console.log(c1()) 

// console.log(c2())
// console.log(c2())
//We will be starting at 10:28
// q2
// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++;
//         return count
//     }
//     return innerFunction
// }
// const innerFunc = outerFunction() ;
// console.log(innerFunc())
// console.log(innerFunc())
// console.log(innerFunc())


// Q3
// function outer() {
//     let arrFn = [];
    
//     for (var i = 0 ;i < 3; i++) {
//         arrFn.push(function fn() {
//             console.log(i);
//         })
//     }
//     return arrFn;
// }
// let arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();
// Output : 3,3,3


// Q4
// function outer() {
//     let arrFn = [];
// let i;
//     for ( i= 0; i < 3; i++) {
//         arrFn.push(function fn() {
//             console.log(i);
//         })
//     }
//     return arrFn;
// }
// let arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();
//  output-> 3,3,3;

// q5 
// function outer() {
//     let arrFn = [];
    
//     for (let i = 0; i < 3; i++) {
//         arrFn.push(function fn() {
//             console.log(i);
//         })
//     }
//     return arrFn;
// }
// let arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();

// 0,1,2



//  you have to use -> var and memory allocation feature -> 0,1,2
function outer() {
    let arrFn = [];
    for ( var i = 0; i < 3; i++) {
        arrFn.push(function fn() {
            console.log(i);
        })
    }
    return arrFn;
}
let arrFn = outer();
arrFn[0]();
arrFn[1]();
arrFn[2]();


// teach bind -> memory allocation, IIFEE, bind


// setTimeout -> async function


