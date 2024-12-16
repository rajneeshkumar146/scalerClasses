const mongoose = require("mongoose");

const showSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        movies: {

        },
        ticketPrice: {

        },
        totalSeats: {

        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("shows", showSchema);
