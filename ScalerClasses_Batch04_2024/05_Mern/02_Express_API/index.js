// Import the module
const express = require("express");



// create an Express application.
const app = express();
app.use(express.json()); // It is a middleware for all post request which help to receive requst body which my server can understand.


// Define a route.
// Base Url: http://localhost:3000/
app.get("/", (req, res) => {
    res.send("Hello Server!");
});

// Base Url: http://localhost:3000/about
// curl --request GET http://localhost:3000/about
app.get("/about", (req, res) => {
    res.send("This is about page");
});

// Base Url: http://localhost:3000/data
app.post("/data", (req, res) => {
    // console.log("Request received: ", req);
    console.log("Request received: ", req.body);
    res.send("This is post request");
});

const users = [
    { id: 1, name: "Sheela" },
    { id: 2, name: "Annu" }
];

// Base Url: http://localhost:3000/users
app.post("/users", (req, res)=>{
    const newUser = req.body;


    // operation.
    const userId = users.length + 1;
    newUser.id = userId;

    // Persist this information in your DB.
    users.push(newUser);

    // send the status code.
    res.status(200).json({message: "User Created", user: newUser});

    console.log("Print all Users: ", users);
});

// Base Url: http://localhost:3000/payment
const userDb = [];
const notAllowList = ["R", "r"];
app.post('/payment', (req, res)=> {



    console.log("Pritn all users: ", userDb);
})






// start the server
const port = 3000;
const host = "localhost";
app.listen(port, () => {
    console.log(`server is running on http://${host}:${port}`);
});
