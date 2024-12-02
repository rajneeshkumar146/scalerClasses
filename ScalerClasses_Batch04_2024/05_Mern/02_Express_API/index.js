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
    { id: 2, name: "Annu" },
    { id: 3, name: "Rajneesh" }
];

// Base Url: http://localhost:3000/users
app.post("/users", (req, res) => {
    const newUser = req.body;


    // operation.
    const userId = users.length + 1;
    newUser.id = userId;

    // Persist this information in your DB.
    users.push(newUser);

    // send the status code.
    res.status(200).json({ message: "User Created", user: newUser });

    console.log("Print all Users: ", users);
});

// Base Url: http://localhost:3000/payment
const userDb = [];
const notAllowList = ["t", "T", "R"];
app.post('/payment', (req, res) => {
    const paymentBody = req.body;
    let isValidUser = notAllowList.some(indentifier => paymentBody.user.startsWith(indentifier));

    if (isValidUser) {
        res.status(400).json({ Message: "Invalid user" });
    } else {
        userDb.push(paymentBody);
        res.status(200).json({ message: "Valid user, User is saved" });
    }

    console.log("Pritn all users: ", userDb);
});

// Base Url: http://localhost:3000/users/1
app.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);

    // find the user with id.
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ message: "user not found" });
    }

    users.splice(userIndex, 1);
    res.status(200).json({ message: "user deleted" })

    console.log("Print all Users: ", users)
});

const loggerMiddleware_logging = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    // res.send("Request is logged and don't call next middleware");  // some condition.
    next(); // call the next middleware.
}

const loggerMiddleware_validation = (req, res, next) => {
    console.log("Validation process begins: " + `[${new Date().toISOString()}] ${req.method} ${req.url}`);
    // res.send("Request is not Validated and don't call next middleware");  // some condition.
    next(); // call the next middleware.
}

// Base Url: http://localhost:3000/special
app.get("/special", loggerMiddleware_logging,loggerMiddleware_validation, (req, res) => {
    res.send("Welcome to special route");
});

// Base Url: http://localhost:3000/search?name="Rajneesh"
app.get("/search", (req, res) => {
    const queryParam = req.query;
    console.log("Name: ", queryParam);
    res.send(`Your parameter are ${JSON.stringify(queryParam)}`)
});

app.use((req,res) => {
    res.status(404).send("Page Not Found!!!");
});


// start the server
const port = 3000;
const host = "localhost";
app.listen(port, () => {
    console.log(`server is running on http://${host}:${port}`);
});
