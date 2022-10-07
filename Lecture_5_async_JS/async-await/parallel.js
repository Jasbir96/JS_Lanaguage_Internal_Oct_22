// /fs , os ,http 
const fs = require("fs");
console.log("Starting");
// we don't need to pass cb

// console.log(p1);
// then and catch -> syntax sugar
(async function (){
    try{
        let p1 = fs.promises.readFile("../f1.txt"); 
        let p2 = fs.promises.readFile("../f2.txt"); 
        let p3 = fs.promises.readFile("../f3.txt"); 
        // value of that resolved 
        let data = await p1;
        console.log("then", data.toString());
        data=await p2;
        console.log("then", data.toString());
        data=await p3;
        console.log("then", data.toString());
    }catch(err){
        console.log("then", err.message);
    }
})()



console.log("Ending");