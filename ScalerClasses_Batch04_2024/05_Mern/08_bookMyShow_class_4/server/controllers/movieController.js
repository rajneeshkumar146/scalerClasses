const Movie = require("../model/movieModel");

// GET
const getAllMovies = async (req, res) => {

}

const getMovieById = async (req, res) => {

}

// POST
const addMovie = async (req, res) => {

}

const deleteMovie = async (req, res) => {
    try {
        console.log("req.body", req.body.movieId);
        await Movie.findByIdAndDelete(req.body.movieId);
        res.send({
            success: true,
            message: "Movie deleted successfully",
        });
    } catch (err) {
        res.send({
            success: false,
            message: err.message,
        });
    }
}

// PUT
const updateMovie = async (req, res) => {

}


module.exports = { addMovie, getAllMovies, updateMovie, deleteMovie, getMovieById };
