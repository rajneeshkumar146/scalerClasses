const Theatre = require("../model/theatreModel");

// POST
const addTheatre = async () => {
    try {
        const newTheatre = new Theatre(req.body);
        await newTheatre.save();
        res.send({ success: true, message: "Theatre added successfully" });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error from theatre controller" + err.message,
        });
    }
}

// PUT
const updateTheatre = async () => {
    try {
        await Theatre.findByIdAndUpdate(req.body.theatreId, req.body);
        res.send({
            success: true,
            message: "Theatre updated successfully",
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error from theatre controller" + err.message,
        });
    }
}

// DELETE
const deleteTheatre = async () => {
    try {
        console.log("deleting theatre", req.params.theatreId);
        await Theatre.findByIdAndDelete(req.params.theatreId);
        res.send({ success: true, message: "Theatre deleted successfully" });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error from theatre controller" + err.message,
        });
    }

}

// GET
const getAllTheatre = async () => {
    try {
        const allTheatres = await Theatre.find().populate("owner");
        console.log("Read all theatres", allTheatres);
        res.send({
            success: true,
            message: "All theatres fetched successfully",
            data: allTheatres,
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error from theatre controller" + err.message,
        });
    }

}

const getTheatreByOwner = async () => {
    try {
        const allTheatres = await Theatre.find({ owner: req.params.ownerId });
        res.send({
            success: true,
            message: "All theatres fetched successfully",
            data: allTheatres,
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error from theatre controller" + err.message,
        });
    }

}

module.exports = { addTheatre, updateTheatre, deleteTheatre, getAllTheatre, getTheatreByOwner };




