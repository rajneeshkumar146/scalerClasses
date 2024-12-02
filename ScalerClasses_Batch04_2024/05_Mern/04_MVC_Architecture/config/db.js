const mongoose = require("mongoose");

// Important links and URL.
const DB_URL = "mongodb+srv://rajneeshkumar146:DKOhz0HnSwt1fjMS@cluster0.wjpxi.mongodb.net/";

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