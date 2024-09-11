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

// Function Contructor.
function CustomPromise(executeFn) {
    // Add required properties and methods.

    // Promise does not expose these properties.




    // attach resolve.
    /** 1. Make sure that if promsie get resolved you are not supposed to resolve the same promise again. */
    const resolve = (value) => {

    }

    // attach reject.
    /** 1. Make sure that if promsie get rejected you are not supposed to reject the same promise again. */
    const reject = (value) => {

    }

    // Thread then with resolve.
    /** 1. If Promise is resolved It doesn't matter how many times we invoke then() everytime we will get same resopose for same promise. Means Promise result should be Idempotent. */


    // Thread catch with reject.
    /** 1. If Promise is rejected It doesn't matter how many times we invoke catch() everytime we will get same error for same promise. Means Promise result should be Idempotent. */




    // Most Important: don't forget to call your executor function.
    executeFn(resolve, reject);
}


const executeFn = (resolve, reject) => {
    // cb based fn.
    setTimeout(() => {
        resolve("Hey there I'm resolved.")
    }, 1000);

    // cb based fn.
    setTimeout(() => {
        reject("Hey there I'm rejected.")
    }, 2000);
}


// ***************** usage of your custom *****************
const myPromise = new CustomPromise(executeFn);

myPromise.then((data) => {
    console.log(data);
});

myPromise.then((data) => {
    console.log("I am the second then");
});

myPromise.catch((err) => {
    console.log("Error: ", err);
})

myPromise.catch((data) => {
    console.log("I am the second catch");
})