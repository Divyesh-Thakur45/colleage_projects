const express = require("express");
const {
  loginController,
  registerController,
  meController,
  logoutController,
} = require("../controllers/auth.controller");
const { isAuth } = require("../middlewares/isAuth");

const authRoutes = express.Router();

authRoutes.post("/login", loginController);

authRoutes.post("/register", registerController);

authRoutes.post("/logout", logoutController);

authRoutes.get("/me", isAuth, meController);

module.exports = authRoutes;
