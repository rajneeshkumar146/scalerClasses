const express = require("express");
const {
  register,
  login,
  getCurrentUser
} = require("../controllers/userController");

const userRouter = express.Router();

// POST
userRouter.post("/register", register);

module.exports = userRouter;
