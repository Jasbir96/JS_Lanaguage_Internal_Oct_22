const {chargeCreditCard} =require("./lib");
console.log("Before");

let amount = 100;
let priceofOne = 20;
chargeCreditCard(amount, cb);

function cb() {
    amount = amount - priceofOne;
    console.log("Amount: ", amount);
}
console.log("After");
// 2015 -> Promises
