const express = require('express');

// Load env Variables.
require('dotenv').config();

// Constants
const PORT = 3000;
const HOST = "localhost";

// Setup
const app = express();
app.use(express.json()); // Middleware

// Data base connection.
const connectDb = require("./config/db");
connectDb(); // Stablish database connection.

// Global Variables
const USER_ROUTER = require("./routes/userRouter");

// Routes.
app.use("/api/users", USER_ROUTER);

app.get("/", (req, res) =>
    res.status(201).send("Welcome to the home page.")
);

app.use((req, res) =>
    res.status(404).json({ message: "page not found" })
);

// Start the server.
app.listen(PORT, () => {
    console.log(`server is running on http://${HOST}:${PORT}`);
});

