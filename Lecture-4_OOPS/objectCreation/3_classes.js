

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printName() {
        console.log("Hi i am ", this.name);
    }
    // getter in classes
    get firstname() {
        const nameArr = this.name.split(" ")
        return nameArr[0];
    }
    set firstname(value){
    const nameArr = this.name.split(" ");
        nameArr[0]=value;
        this.name =nameArr.join(" ");
    }
}
const p1 = new Person("Jasbir Singh", 20);
// console.log("p1",p1);
p1.printName()
// getting some value
console.log(p1.firstname);
// setting a value
p1.firstname="Sunil";
// 
p1.printName()
