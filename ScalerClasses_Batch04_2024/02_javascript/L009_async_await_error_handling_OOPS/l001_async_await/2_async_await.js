const fs = require("fs");
console.log("before");

const promise = fs.promises.readFile("./f1.txt");

/***consumption of promise*/
// await only works inside a function with async keyword.

async function fn(){
    try{
        const data = await promise;
        console.log("data inside the file is: "+ data);
    }catch(err){
        console.log("Err: ", err);
    }
}

fn();

/***consumption of promise*/
// promise
//     .then(function (futureValue) {
//         console.log("Data inside the file is: " + futureValue);
//     })

// promise
//     .catch(function (err) {
//         console.log("err", err);
// })


console.log("after");