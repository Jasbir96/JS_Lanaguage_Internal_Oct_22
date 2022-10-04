// // loops , conditionals , classes 
// // console.log("Hello World!");
// // there is no main function
// // console.log("Hello World!");
// // statically typed language 
// //  define type of the variable during decalration 
// // int a;
// //  JS -> lossley typed language
// //  var a;
// //  console.log("a",a);

// //  a="string over here";

// //  Datatype in JS
// /**
//  * Primitive Types : 
//  *  Numbers : floating values of 64 bit 
//  *  String : we have string with "",'' -> means the same 
//  *  Boolean  : true/false
//  *  undefined : undefined is default for many things
//  *  null : also represent empty value but it is intentionally set 
//  * New Types : 
//  *      BigInt //2019 -> to represent numbers that are bigger 
//  * than 2^53-1 it is only liited by your heap size
//  *      Symbol
//  */

// // typeof Tells -> current type of variable 
// var b;
// // console.log("b",b, typeof b); //undefined
// // b=10;
// // console.log("b", b, typeof b); //number

// // b=10.1;
// // console.log("b", b, typeof b); //number 

// // // console.log("b",b)//10.1
// // // console.log("30",b); //undefined
// // b="Hello i can put string also"
// // // console.log("32",b); // Hello i can put string also
// // console.log("b", b, typeof b);//string

// // b=true;
// // console.log("b", b, typeof b); //boolean

// //  mistake 
// // null is repersented by -> null pointer -> it's type tag was  -> 0
// // inital version has tag on object -> 0
// b=null;
// // console.log("b", b, typeof b);
// // console.log("ans",Number.parseInt(5/2));`


// // 
// let biggerThanNum=BigInt(123456783456783456783456456455);
// console.log("biggerThanNum",biggerThanNum);
// // symbol are used to declare unique primitve Types

let a="Hi";
let bHi="Hi";
// true
console.log(a==bHi);
//  symbol create two unique identifiers -> primitive
// let key1=Symbol("Hi");
// let key2=Symbol("Hi");
// console.log(key1,key2);
// console.log(key1===key2);

// it will create a unique identifier
//  and it will not equal to anything else 
// if you want to a name to this unique identifierjust put a string
let key =Symbol("skjghbdfjhgdjhf");
let key2=Symbol("Hi");
console.log(key ==key2)






