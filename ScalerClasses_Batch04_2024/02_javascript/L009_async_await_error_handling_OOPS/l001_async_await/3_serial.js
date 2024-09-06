let fs = require("fs");

console.log("before");

// fs.promises.readFile("./f1.txt")
//     .then((data) => {
//         console.log("My Content is: " + data);
//         return fs.promises.readFile("./f2.txt");
//     }).then((data) => {
//         console.log("My Content is: " + data);
//         return fs.promises.readFile("./f3.txt");
//     }).then((data) => {
//         console.log("My Content is: " + data);
//     }).catch((err) => {
//         console.log("Ohh! I hit by error: " + err);
//     });

// IFEE
// (async function fn() {
//     // This will first catch the error and let the developer decided what need to do with that error. program will not get terminated until developer throw that error from catch block.
//     try {
//         let data1 = await fs.promises.readFile("./f1.txt");
//         console.log("My Content is: " + data1);

//         let data2 = await fs.promises.readFile("./f2.txt");
//         console.log("My Content is: " + data2);

//         let data3 = await fs.promises.readFile("./f33.txt");
//         console.log("My Content is: " + data3);

//         // Close DB connection logic. Not a correct place, finall is the block where we should write that logic.
//     } catch (err) {
//         // Close DB connection logic. Not a correct place, finall is the block where we should write that logic.
//         // For Failure Alert this the correct place.
//         // Unsubscribe from an event after failure only then it is a correct place. 
//         console.log("Ohh! I hit by error: " + err);
//     } finally{
//          // Close DB connection logic. this is correct place to write such kind of logic.
//         console.log("I will run in any scenario!");
//     }

//     // // This will throw error at console level and program get terminated.
//     // let data1 = await fs.promises.readFile("./f1.txt");
//     // console.log("My Content is: " + data1);

//     // let data2 = await fs.promises.readFile("./f2.txt");
//     // console.log("My Content is: " + data2);

//     // let data3 = await fs.promises.readFile("./f33.txt");
//     // console.log("My Content is: " + data3);
// })();

// async function fn() {
//     try {
//         let data1 = await fs.promises.readFile("./f1.txt");
//         console.log("My Content is: " + data1);

//         let data2 = await fs.promises.readFile("./f2.txt");
//         console.log("My Content is: " + data2);

//         let data3 = await fs.promises.readFile("./f3.txt");
//         console.log("My Content is: " + data3);

//         // console.log("My combined Content is: " + data1 + data2 + data3);
//         return "rVal from fn";
//     } catch (err) {
//         console.log("Ohh! I hit by error: " + err);
//     }
// }


// let rVal = fn();
// fn2();
// console.log("Rval from line no 30: " + rVal);

// rVal.then((data) => {
//     console.log("rVal from no 30 using then: " + data);
// });

// async function fn2() {
// try {
//     let rValData = await rVal;
//     console.log("Rval from line no 30 using async: " + rValData);


// } catch (err) {
//     console.log("Ohh! I hit by error: " + err);
// }
// }

// Case 1: This will throw error.
// try {
//     let rValData = await rVal;
//     console.log("Rval from line no 300 using async: " + rValData);


// } catch (err) {
//     console.log("Ohh! I hit by error: " + err);
// }

// Case 1: This will throw error.
// let rValData = await rVal;
// console.log("Rval from line no 300 using async: " + rValData);


console.log("after");