
// Phase 1 : Hositing -> 
// Memory allocation is done : variables will get value -undefined
// function will have there memory allocated 
// /phase 2 -> code is executed normally
//  we don't main  -> code that is not inside any other function is in global area 
// memory allocation done for global area
console.log("a",a);
var a;
a=10;
console.log("a",a);
real();
function real() { 
    console.log("I am real. Always run me"); 
}
function real() { 
    console.log(" No I am real one ");
 }
function real() { 
    console.log("You both are wasted");
 }



 
