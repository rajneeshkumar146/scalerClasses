// function resolveAfterNSeconds(delay, x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Value: " + x);
//             resolve(x);
//         }, delay);
//     });
// }

// (function () {
//     let a = resolveAfterNSeconds(1000, 1)
//     a.then(async function (x) {
//         // Time: 1s

//         let y = await resolveAfterNSeconds(2000, 2) // Time: 1s + 2s = 3s
//         let z = await resolveAfterNSeconds(1000, 3) // Time: 1s + 2s + 1s = 4s


//         // let p = await resolveAfterNSeconds(2000, 4);  // Time: 1s + 2s + 1s + 2s = 6s
//         // let q = await resolveAfterNSeconds(1000, 5);   // Time: 1s + 2s + 1s + 2s + 1s = 7s

//         let p1 = resolveAfterNSeconds(2000, 4); // Time: 1s + 2s + 1s + 2s = 6s
//         let q1 = resolveAfterNSeconds(1000, 5); // Time: 1s + 2s + 1s + 1s = 5s 


//         console.log(x + y + z + await p1 + await q1);


//         /**
//          * litreal meaning of await -> waiting for some result 
//          * if result is pdening -> wait
//          * if your result -> use 
//          * **/
//     })
// })()


// Statement 2
// const a = (async function () {
//     return await Promise.resolve('shubham')
// })();
// console.log(a);
// a.then(function (data) {
//     console.log(data);
// })

// Statement 3
// async function getData() {
//     return 10
// }

// async function print(a) {
//     let b = await a;
//     console.log(b);
// }

// print(getData())