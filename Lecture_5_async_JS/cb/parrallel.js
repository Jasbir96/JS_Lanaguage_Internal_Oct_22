// /fs , os ,http 
const fs=require("fs");
console.log("Starting");
fs.readFile("../f1.txt",function(err,data){
    if(err){
        console.log("Error reading file: " , err);
    }else{
        console.log("I cb");
        console.log(data.toString());
    }
})
fs.readFile("../f2.txt", function (err, data) {
    if (err) {
        console.log("Error reading file: ", err);
    } else {
        console.log("I cb");
        console.log(data.toString());
    }
})
fs.readFile("../f3.txt", function (err, data) {
    if (err) {
        console.log("Error reading file: ", err);
    } else {
        console.log("I cb");
        console.log(data.toString());
    }
})

console.log("Ending");