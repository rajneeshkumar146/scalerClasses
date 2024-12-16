const ShowRouter = require("express").Router();

const {
    addShow,
    updateShow,
    deleteShow
} = require("../controllers/ShowController");

// POST
ShowRouter.post("/add-show", addShow);

ShowRouter.post("/delete-show", deleteShow);

// GET


//PUT
ShowRouter.put("/update-show", updateShow);

module.exports = ShowRouter;
