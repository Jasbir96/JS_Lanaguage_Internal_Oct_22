// var -> 
//It can be redeclared
// scope -> functional scope
// var a = 10;
// console.log("line number 2", a);
function fn() {
    var a = 20;
    a++;
    console.log("line number 7", a);
    if (a) {
        var a = 30;
        a++;
        console.log("line number 11", a);
    }
    console.log("line number 13", a);
}
fn();
console.log("line number 2", a);