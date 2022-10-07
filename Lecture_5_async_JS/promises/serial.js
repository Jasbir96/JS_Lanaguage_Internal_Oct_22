const fs = require("fs");
console.log("Starting");
// chaining in promises
let p1=fs.promises.readFile("../f1.txt", cb1);
//  you are inverting your control to then
p1
.then(function (data) {
    console.log("then ", data.toString());
   return fs.promises.writeFile("../f2.txt");
}).then(function(data){
    console.log("then ", data.toString());
    return  fs.promises.writeFile("../f2.txt");   
}).then(function (data) {
        console.log("then ", data.toString());
    })
.catch(function (err) {
    console.log("err ", err);
});
console.log("Ending");
//  these methods con't be called twice-> then and catch