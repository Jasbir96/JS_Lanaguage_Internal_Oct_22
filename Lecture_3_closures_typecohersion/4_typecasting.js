//  type cohersion -> converted mainly into higher 
// let x=1;
// let y="1";
// // 11 -> converted into string
// console.log(x+y);
// //  0 
// console.log(x-y);
// // 21
// console.log(1 + 1 + "1");
// console.log(1+true);
// console.log("1"+true);
//  we are doing a numeric opr but the rest can't be 
// represented
console.log(1+undefined);
console.log(1+Boolean(null));
let a=2.1
let b=3.9;
let c=a + b;
console.log(c.toFixed(4));

//  falsy value ->null , undefined, 0, false ,"",NaN


