//  function definition-> actual code of your function
function fn(a, b) {
    // Hello.... 12 
    console.log("Hello i am fn", a * b);
}
// 1 printing our function =[Function : fn]
console.log("7",fn);
// function invocation`

let res = fn(3, 4);
// returned val of that fn
console.log(res);
// In JS -> primitives and obj
// adding prop on that fn
fn.MyProp=10;
fn.myFn=function()
{
    console.log("I am Mathod of a function")
}
//  fn is nothing but an object that can be called 





