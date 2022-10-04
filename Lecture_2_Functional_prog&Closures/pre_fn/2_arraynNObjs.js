//  Js -> copies Java or either it emulates you Java
//  there are no array's in js -> array are just an emulation of object 
let arr=[1,2,3,4,5];

// normal loop
for(let i=0; i<arr.length; i++){
    console.log( i+" " +arr[i]);
}
console.log(typeof arr);

arr[6]=100;
arr["hello"]=21;
arr[100]=200;
//length -> largest numeric key -> put length +1
console.log(arr.length)
console.log("12", arr)





