const { runMlAlgo, PromiseRunMlAlgo } = require("./lib");

console.log("Before");


let amount = 100;
let priceOfOne = 20;


// runMlAlgo(logicToDeductAmount);
function logicToDeductAmount() {
    amount = amount - priceOfOne;
    console.log("Amount: ", amount);
}

const promise = PromiseRunMlAlgo();
promise.then(() => {
    logicToDeductAmount();
}).catch((err) => {
    console.log("Error is: " + err);
})



console.log("After");