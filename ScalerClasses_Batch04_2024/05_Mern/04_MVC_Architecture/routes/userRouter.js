const express = require("express");
const { getAllUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById } = require("../controllers/userController");

const userRouter = express.Router();

// POST
userRouter.post("/", createUser);

// GET
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);

// PUT
userRouter.put("/:id", updateUserById);

// DELETE
userRouter.delete("/:id", deleteUserById);

module.exports = userRouter;