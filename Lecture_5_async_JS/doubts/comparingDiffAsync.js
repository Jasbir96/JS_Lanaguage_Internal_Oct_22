// 3
setImmediate(() => {
    console.log("I am  Immediate");
})
setTimeout(() => {
    console.log("I am SetTimeout");
}, 0);
// 1
process.nextTick(() => {
    console.log("I am nextTick")
})
// 2 promisese -> async await , then 
const p1 = Promise.resolve();
p1.then(function (result) {
    console.log("I am a promise");
})