/*****setTimeout -> clearTimeout****/

// console.log("Before");
// function cb() {
//     console.log("Set-timeouts cb has been called.")
// }

// // setTimeout(cb,5000);

// setTimeout(canceller, 2000);
// const timerId = setTimeout(cb, 2000);
// // console.log("Timer Id: ", timerId);

// function canceller() {
//     console.log("Cancelling the timeout");
//     clearTimeout(timerId);
// }

// console.log("After");

/************setInterval, clearInterval*********/
console.log("Before");
function cb() {
    console.log("Interval called " + Date.now());
}

// setInterval(cb, 2000)

const timerId = setInterval(cb, 1000);


function cancelInterval() {
    console.timeEnd();
    console.log("cancelling the interval timer");
    clearInterval(timerId);
}

console.time();
setTimeout(cancelInterval, 5000);

console.log("after");

//  cb -> of setTimout -> higher precedence then cb of setInterval -> why precedence of SINt<STime