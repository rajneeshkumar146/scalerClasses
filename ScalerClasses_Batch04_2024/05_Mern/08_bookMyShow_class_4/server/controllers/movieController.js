const Movie = require("../model/movieModel");

// GET
const getAllMovies = async (req, res) => {
    try {
        const allMovies = await Movie.find();
        res.status(200).send({
            success: true,
            message: "All movies fetched successfully",
            data: allMovies,
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error from movie controller" + err.message,
        });
    }

}

const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).send({
            success: true,
            message: "Movie fetched successfully",
            data: movie,
        });

    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error from movie controller" + err.message,
        });
    }
}

// POST
const addMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        await newMovie.save();

        res.status(200).send({
            success: true,
            message: "New movie added successfully",
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error from movie controller" + err.message,
        });
    }
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
        res.status(500).send({
            success: false,
            message: err.message,
        });
    }
}

// PUT
const updateMovie = async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(
            req.body.movieId,
            req.body
        );
        res.send({
            success: true,
            message: "Movie updated successfully",
            data: updatedMovie,
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error from movie controller" + err.message,
        });
    }
}


module.exports = { addMovie, getAllMovies, updateMovie, deleteMovie, getMovieById };
