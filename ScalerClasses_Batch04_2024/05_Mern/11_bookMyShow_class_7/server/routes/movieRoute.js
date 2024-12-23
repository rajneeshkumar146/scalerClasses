const movieRouter = require("express").Router();
const {
  addMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
  getMovieById
} = require("../controllers/movieController");

// POST
movieRouter.post("/add-movie", addMovie);
movieRouter.post("/delete-movie", deleteMovie);

// GET
movieRouter.get("/get-all-movies", getAllMovies);
movieRouter.get("/get-movie/:id", getMovieById);

//PUT
movieRouter.put("/update-movie", updateMovie);

module.exports = movieRouter;
