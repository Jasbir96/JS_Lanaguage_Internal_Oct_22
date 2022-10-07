// /fs , os ,http 
const fs = require("fs");
console.log("Starting");
// we don't need to pass cb
let p1 = fs.promises.readFile("../f1.txt");
let p2=fs.promises.readFile("../f2.txt");
let p3=fs.promises.readFile("../f3.txt");
// console.log(p1);
// listener
p1.then(function (data) {
    console.log("then ", data.toString());
}).catch(function (err) {
    console.log("err ", err);
})
p2.then(function (data) {
    console.log("then ", data.toString());
}).catch(function (err) {
    console.log("err ", err);
})
p3.then(function (data) {
    console.log("then ", data.toString());
}).catch(function (err) {
    console.log("err ", err);
})


console.log("Ending");