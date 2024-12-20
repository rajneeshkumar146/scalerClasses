const ShowRouter = require("express").Router();

const {
    addShow,
    updateShow,
    deleteShow,
    getShowsByTheathres,
    getAllTheathresByMovie,
    getShowById
} = require("../controllers/ShowController");

// POST
ShowRouter.post("/add-show", addShow);

ShowRouter.post("/delete-show", deleteShow);

ShowRouter.post("/get-all-shows-by-theatres", getShowsByTheathres);

ShowRouter.post("/get-all-theatres-by-movie", getAllTheathresByMovie);

ShowRouter.post("/get-show-by-id", getShowById);

// GET

//PUT
ShowRouter.put("/update-show", updateShow);

module.exports = ShowRouter;
