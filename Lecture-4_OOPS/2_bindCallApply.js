const cap = {
    name: "Steve",
    sayHi: function () {
        console.log("53",this.name);;
    },
    a:10,b:20, 
    print :function(args1,args2){
console.log(args1, args2);
    }
}
const ironMan={
    name:"Tony"
}
// return a function that is bound to and objet that you pass to it;
// const boundFN=cap.sayHi.bind(cap);
// boundFN();
// method borrowig 
const anotherBoundFn=cap.sayHi.bind(ironMan)
// anotherBoundFn();
// call -> calls you method with ceratin this but does not return a method
//  you can also pass parameters to that method
cap.sayHi.call(ironMan,3,4);
//  same as call but parameters are passed in an array
cap.print.apply(cap,[1,2]);





