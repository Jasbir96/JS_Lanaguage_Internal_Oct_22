// it is a method that writen in your lib file
const {chargeCreditCard} =require("./lib");
console.log("Before");
let amount = 100;
let priceofOne = 20;
// visualziation -> sales and help visualize
// there is inversion of control to library 
chargeCreditCard(amount, cb);
function cb() {
    amount = amount - priceofOne;
    console.log("Amount: ", amount);
}
console.log("After");
