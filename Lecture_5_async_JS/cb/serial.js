const fs = require("fs");
console.log("Starting");
fs.readFile("../f1.txt", cb1);
function cb1(err, data) {
    if (err) {
        console.log("Error reading file: ", err);
    } else {
        console.log("I cb");
        console.log(data.toString());
        fs.readFile("../f2.txt", cb2);
    }

}
function cb2(err, data) {
    if (err) {
        console.log("Error reading file: ", err);
    } else {
        console.log("I cb");
        console.log(data.toString());
        fs.readFile("../f3.txt", cb3);
    }
}
function cb3(err, data) {
    if (err) {
        console.log("Error reading file: ", err);
    } else {
        console.log("I cb");
        console.log(data.toString());
    }
}
console.log("Ending");