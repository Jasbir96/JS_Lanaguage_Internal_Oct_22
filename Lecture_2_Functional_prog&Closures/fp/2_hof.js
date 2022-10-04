// //  2 aspect ->  pass obj as param
// function fn(a) {
// // console.log("I am an object",param);
// a();
// }
// // fn(obj);
// //  is anyone having issue with this
// //  function as paramater also
// fnAdd(fnAdd);
// ***********************************

//  we can return a obj from a function
// Higher order functions : 
// function that takes a function as a parameter or returns a function from it 
function greeter(name, cb) {
    let greetMessage = cb(name);
    console.log("Hi", greetMessage)
}
//  
// greeter("Jhon Snow", printFirst);

// greeter("Robert Dicosta", printLastName);

// function printFirst(firstName) {
//     let arr = firstName.split(" ");
//     return arr[0];
// }
// function printLastName(firstName) {
//     let arr = firstName.split(" ");
//     return arr[1];
// }


// let arr = [1, 2, 3, 4, 5];
// function square(value) {
//     return value * value;
// }
// function cuber(value){
//     return value*value*value;
// }

// let newArr = arr.map(square);

// console.log("newArr", newArr);
// console.log("arr", arr);
// newArr=arr.map(cuber);
// console.log("newArr", newArr);
// *******questions*****

// function myMap(arr, cb) {
// let newArr=[];
// for(let i=0; i<arr.length; i++){
//    let res= cb(arr[i])
//     newArr.push(res);
// }
// return newArr;
// }
// let Sqarr = myMap(arr, square);
// console.log("sqArr",Sqarr)
//  let cubeArr = myMap(arr, cuber);
// console.log("cubeArr", cubeArr)

//  filter and reduce

// what is filter,reduce in Js
const words = ['spray', 'limit', 'elite',
'exuberant', 'destruction', 'present'];
function filterMoreThen6(word) {
    return word.length > 6;
}
let wordsG6 = words.filter(filterMoreThen6);
console.log("arr",wordsG6);
// console.log("words",words);
function myFilter(arr ,test){
let newArr=[];
for(let i=0; i<arr.length;i++){
    let res= test(arr[i]);
    if(res==true){
        newArr.push(arr[i]);
    }
}
return newArr;
}
wordG6=myFilter(words,filterMoreThen6);
console.log("``````````");
console.log("arr", wordsG6);



// *****reduce ****


