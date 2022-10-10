let a={
    p:10,sum :()=>{
    }
}
let b=Object.create(a);
// b is created with a 
console.log(a,b);
//  b inherites property of  a
console.log(b.p);
//  it will override p prop that it inherites from a
// iniside b but can't change you p in a
b.p=12;
console.log(a,b);
// to check if b is created from a 
console.log(a.isPrototypeOf(b)); //true 
// console.log(b.isPrototypeOf(a));

// Object.hasOwnProperty(arr.map)
