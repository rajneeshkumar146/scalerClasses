const express = require("express");
const auth = require("../middlewares/authMiddleware")
const {
  register,
  login,
  getCurrentUser
} = require("../controllers/userController");

const userRouter = express.Router();

// POST
userRouter.post("/register", register);
userRouter.post("/login", login);

// GET
userRouter.get("/get-current-user",auth, getCurrentUser);


module.exports = userRouter;
