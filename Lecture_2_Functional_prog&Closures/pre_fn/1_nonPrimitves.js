// core non-primitive types are : Object ,Arrays,functions
// let obj={};

// object : collection [key : Value] 
            // Where key : string or a number
            //  value:  any valid Js Type

let cap = {
    // properties
    name: "Steve",
    // space in key 
    "last Name": "Rogers",
    friends: ["Peter", "Bruce", "Tony"],
    age: 34,
    isAvenger: true,
    //  methods
    sayHi: function () {
        console.log("cap say's Hi");
    },
    10: "My value is 10",
    address: {
        state: "New York",
        city: "NY City"
    },
}
// print the object
console.log("cap",cap);
//  
console.log("firstName", cap.name);
//  array value in obj
console.log("friend", cap.friends[1]);
// 
console.log("city", cap.address.city);

console.log("isAvenger", cap.isAvenger);
//  call 
 cap.sayHi();











// Collections: set,Map,WeakMap,WeakSet