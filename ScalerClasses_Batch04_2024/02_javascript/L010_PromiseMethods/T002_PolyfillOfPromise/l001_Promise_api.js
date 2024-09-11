// function promiseSetTimeOut(delay) {
//     function executorFn(resolve, reject) {
//         setTimeout(() => {
//             resolve("Hi There!!!!");
//         }, delay);
//     }
//     return new Promise(executorFn);
// }

// promiseSetTimeOut(1000).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log("Error: " + err);
// });

/** Polyfill of promise example using `executeFn`. */

const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

// Function Contructor.
function CustomPromise(executeFn) {
    // Add required properties and methods.
    // Promise does not expose these properties.

    let PROMISE_STATE = PENDING;
    let RESULT_VALUE = undefined;

    let SUCCESS_CALLBACK_ARRAY = []; // It can be a queue. 
    let FAILURE_CALLBACK_ARRAY = []; // It can be a queue.

    // attach resolve.
    /** 1. Make sure that if promsie get resolved you are not supposed to resolve the same promise again. */
    const resolve = (value) => {
        if (PROMISE_STATE != PENDING) return;

        PROMISE_STATE = RESOLVED;
        RESULT_VALUE = value;

        // Call your all success from call back array.
        SUCCESS_CALLBACK_ARRAY.forEach((callback) => {
            callback(RESULT_VALUE);
        })

    }

    // attach reject.
    /** 1. Make sure that if promsie get rejected you are not supposed to reject the same promise again. */
    const reject = (error) => {
        if (PROMISE_STATE != PENDING) return;

        PROMISE_STATE = REJECTED;
        RESULT_VALUE = error;

        // Call your all failures from call back array.
        FAILURE_CALLBACK_ARRAY.forEach((callback) => {
            callback(RESULT_VALUE);
        })
    }

    // Thread then with resolve.
    /** 1. If Promise is resolved It doesn't matter how many times we invoke then() everytime we will get same resopose for same promise. Means Promise result should be Idempotent. */
    this.then = function (cb) {
        if (PROMISE_STATE === RESOLVED) {
            cb(Value);
        } else if (PROMISE_STATE == PENDING) {
            SUCCESS_CALLBACK_ARRAY.push(cb);
        }
    }

    // Thread catch with reject.
    /** 1. If Promise is rejected It doesn't matter how many times we invoke catch() everytime we will get same error for same promise. Means Promise result should be Idempotent. */
    this.catch = function (cb) {
        if (PROMISE_STATE === REJECTED) {
            cb(Value);
        } else if (PROMISE_STATE == PENDING) {
            FAILURE_CALLBACK_ARRAY.push(cb);
        }
    }

    // Most Important: don't forget to call your executor function.
    executeFn(resolve, reject);
}


const executeFn = (resolve, reject) => {
    // cb based fn.
    setTimeout(() => {
        resolve("Hey there I'm resolved.")
    }, 2000);

    // cb based fn.
    setTimeout(() => {
        reject("Hey there I'm rejected.")
    }, 1000);
}


// ***************** usage of your custom *****************
const myPromise = new CustomPromise(executeFn);

console.log("Before");

const cb = (data) => {
    console.log(data);
}

myPromise.then(cb);

myPromise.then(cb);

myPromise.then(cb);

myPromise.then(cb);

myPromise.then((data) => {
    console.log("I am the second then: ", data);
});

myPromise.catch((err) => {
    console.log("Error: ", err);
})

myPromise.catch((data) => {
    console.log("I am the second catch");
})

console.log("After");