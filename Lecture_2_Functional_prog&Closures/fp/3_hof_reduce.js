const numbers = [1, 2, 3, 4, 5];
function sumOf2Nums(acc, elem) {
    return acc + elem;
}
function productOf2Nums(acc, elem) {
    return acc * elem;
}
// 1 without initial 
let sum = numbers.reduce(sumOf2Nums);
const product = numbers.reduce(productOf2Nums);
console.log("sum: ", sum);
console.log("product: ", product);
// 2 initial value
sum= numbers.reduce(sumOf2Nums,10);
console.log("sum: ", sum);
// show behave like reduce
//  myreduce(arr,cb)

function fn(a,b){
console.log(arguments);
    console.log("fn: ",a,b);
}

fn();
fn(10);
fn(10,20);
//  this 30 will be lost 
fn(10,20,30);



