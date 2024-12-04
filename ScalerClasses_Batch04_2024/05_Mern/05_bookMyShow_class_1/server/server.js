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




// Start the server.
app.listen(PORT, () => {
    console.log(`server is running on http://${HOST}:${PORT}`);
});

