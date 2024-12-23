const theatreRouter = require("express").Router();
const {
    addTheatre,
    updateTheatre,
    deleteTheatre,
    getAllTheatre,
    getTheatreByOwner
} = require("../controllers/theatreController");

// POST
theatreRouter.post("/add-theatre", addTheatre);

// DELETE
theatreRouter.post("/delete-theatre/:theatreId", deleteTheatre);

// GET
theatreRouter.get("/get-all-theatres", getAllTheatre);
theatreRouter.get("/get-all-theatre-by-owner/:ownerId", getTheatreByOwner);

//PUT
theatreRouter.put("/update-theatre", updateTheatre);

module.exports = theatreRouter;
