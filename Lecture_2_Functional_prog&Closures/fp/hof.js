// Higher order functions : function that takes a function as a parameter or returns a function from it 
// function greeter(name, cb) {
//     let greetMessage = cb(name);
//     console.log("Hi", greetMessage)
// }

// //  
// // greeter("Jhon Snow", printFirst);

// // greeter("Robert Dicosta", printLastName);

// function printFirst(firstName) {
//     let arr = firstName.split(" ");
//     return arr[0];
// }
// function printLastName(firstName) {
//     let arr = firstName.split(" ");
//     return arr[1];
// }

// arr.map, arr.filter, arr.reduce

let arr = [1, 2, 3, 4, 5];


function square(value) {
    return value * value;
}
function cuber(value){
    return value*value*value;
}

let newArr = arr.map(square);

// console.log("newArr", newArr);
// console.log("arr", arr);
// newArr=arr.map(cuber);
// console.log("newArr", newArr);
// *******questions*****
function myMap(arr, cb) {
let newArr=[];
for(let i=0; i<arr.length; i++){
   let res= cb(arr[i])
    newArr.push(res);
}
return newArr;
}

let Sqarr = myMap(arr, square);
console.log("sqArr",Sqarr)
 let cubeArr = myMap(arr, cuber);
console.log("cubeArr", cubeArr)

// filter function
let onlyOdd=arr.filter(test);



function test(elem){
    return elem%2==1;

}




