const express = require("express");
const {fork} = require("child_process");
const path = require("path");

const app = express();

// serve the static files unser public directory.
app.use(express.static("public"));

// function calculateFibo(number){
//     if(number <= 1){
//         return number;
//     }

//     return calculateFibo(number - 1) + calculateFibo(number - 2);
// }


// app.get("/fib", (req, res) => {
//     const {number, requestNumber} = req.query;
//     console.log("Handler function ran for the request number: ", requestNumber);

//     if(!number || isNaN(number)){
//         return res.status(400).send("Invalid Number");
//     }


//     const answer = calculateFibo(parseInt(number)); // req number 0

//     res.status(200).json({
//         status: "success",
//         message: answer,
//         requestNumber,
//     });
// });

app.get("/fib", (req, res) => {
    const { number, requestNumber } = req.query;
    console.log("Handler function ran for the request number: ", requestNumber);

    if (!number || isNaN(number)) {
        return res.status(400).send("Invalid Number");
    }

    // Create a new child process.
    const fiboRes = fork(path.join(__dirname, "fiboWorker.js"));

    // send data to child process.
    fiboRes.send({ number: parseInt(number, 10) });

    // listen to child process.
    fiboRes.on("message", (result) => {
        res.status(200).json({
            status: "success",
            message: result,
            requestNumber,
        });
    });

    // Kill the child process.
    fiboRes.kill();
});



app.listen(3000, () => {
    console.log("server is running on port http://localhost/3000");
})



