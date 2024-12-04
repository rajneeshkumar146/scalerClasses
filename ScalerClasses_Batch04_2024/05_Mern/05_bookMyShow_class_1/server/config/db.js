const mongoose = require("mongoose");

// driver
const DB_URL = process.env.DB_URL;

console.log("\nPrinting DB URL For Debugging purpose only:", DB_URL, "\n");

// once
const OPTIONS = {
    family: 4 // Use IPv4, skip trying IPv6
}

// Connect to DB.
const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL, OPTIONS);
        console.log("Connected to MongoDB.");
    } catch (err) {
        console.log("Error: ", err);
    }
}

module.exports = connectDB;