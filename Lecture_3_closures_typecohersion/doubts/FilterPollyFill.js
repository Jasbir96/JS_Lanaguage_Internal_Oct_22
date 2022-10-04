Array.prototype.myFilter=function(test){
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        let res = test(this[i]);
        if (res == true) {
            newArr.push(this[i]);
        }
    }
    return newArr;

}
function myFilter(arr, test) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let res = test(arr[i]);
        if (res == true) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
//  arr -> obj 
let arr=[1,2,3,4,5,6,7,8,9,10,11];

// whenever you call a obj -> there is this also passed that points to the calling object 
const res=arr.myFilter(filterOdd);
function filterOdd(elem){
    return elem%2==1;
}
console.log(res);



//  this is alway created for a new context -> how a function is called

//  object-> Object
// Array -> Array
// Number -> 
