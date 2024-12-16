const Show = require("../model/showModel");

// POST
const addShow = async (req, res) => {
    try {
        const newShow = new Show(req.body);
        await newShow.save();
        res.send({
            success: true,
            message: "Show added successfully",
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Failed to add show",
        });
    }
}

// PUT
const updateShow = async (req, res) => {
    try {
        await Show.findByIdAndUpdate(req.body.showId, req.body);
        res.send({
            success: true,
            message: "Show updated successfully",
        });

    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error from theatre controller" + err.message,
        });
    }
}

// DELETE
const deleteShow = async (req, res) => {
    try {
        await Show.findByIdAndDelete(req.body.showId);
        res.send({
            success: true,
            message: "Show deleted successfully",
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error from theatre controller" + err.message,
        });
    }

}

// GET
const getShowsByTheathres = async (req, res) => {
    try {
        const shows = await Show.find({ theatre: req.body.theatreId }).populate(
            "movie"
        );
        res.send({
            success: true,
            data: shows,
            message: "All shows by theatre",
        });
    } catch (err) {
        console.log(err);
        res.send({
            success: false,
            message: "Failed to get all shows by theatre",
        });
    }
}

const getAllTheathresByMovie = async (req, res) => {

    /**
      * This route handles a POST request to /get-all-theatres-by-movie.
      It expects the request body (req.body) to contain movie and date.
      It retrieves all shows of the specified movie and date from the database (await
      Show.find({ movie, date }).populate('theatre')).
    
      It then filters out unique theatres and organizes shows under each unique theatre.
      It sends a success response with the fetched theatres and associated shows.
      If there's an error (e.g., database error), it sends a failure response with an error message.
      
      */

    try {

        const { movie, date } = req.body;
        const shows = await Show.find({ movie, date }).populate("theathre");
        // Filter out the unique theatre.
        const uniqueTheatres = [];
        shows.forEach((show) => {
            const isTheatreAlreadyPresentInMap = uniqueTheatres.find((theatre) => theatre._id === show.theatre._id);

            if (!isTheatreAlreadyPresentInMap) {
                const showOfThisTheatre = shows.filter((showObj) => showObj.theatre._id === show.theatre._id);

                uniqueTheatres.push({ ...shows.theatre._doc, shows: showOfThisTheatre });
            }

            // uniqueTheatres -> [{theatre1, shows: [show1, show2]}, {theatre2, shows: [show1, show2]}]
        });

        res.send({
            success: true,
            data: uniqueTheatres,
            message: "All theatres by movie",
        });
    } catch (err) {
        console.log(err);
        res.send({
            success: false,
            message: "Failed to get all theatres by movie",
        });
    }
}

const getShowById = async (req, res) => {
    try {
        const show = await Show.findById(req.body.showId)
            .populate("movie")
            .populate("theatre");
        res.send({
            success: true,
            data: show,
            message: "Show by id",
        });
    } catch (err) {
        console.log(err);
        res.send({
            success: false,
            message: "Failed to get show by id",
        });
    }
}




module.exports = { addShow, updateShow, deleteShow, getShowsByTheathres, getAllTheathresByMovie, getShowById };




