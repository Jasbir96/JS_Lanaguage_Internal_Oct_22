
const cap = {
    name: "Steve",
    sayHi: function () {
        console.log("53",this.name);;

    },
    a:10,
    b:20
    , 
    print :function(args1,args2){
console.log(args1, args2);
    }
}
// method borrowig 
const ironMan={
    name:"Tony"
}
// const addSayHi=cap.sayHi;
// addSayHi();
// return a function that is bound to and objet that you pass to it;
// const boundFN=cap.sayHi.bind(cap);
// boundFN();
const anotherBoundFn=cap.sayHi.bind(ironMan)
// anotherBoundFn();
// call -> calls you method with ceratin this
cap.sayHi.call(ironMan);
//  apply
cap.print.apply(cap,[1,2]);





