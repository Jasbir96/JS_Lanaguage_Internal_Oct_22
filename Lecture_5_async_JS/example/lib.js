function chargeCreditCard(amount, cb) {
    console.log("processing payment")
    setTimeout(function scb() {
        cb();
        cb();
        console.log("payment done");
    }, 1000);
}

module.exports = {
    chargeCreditCard
}