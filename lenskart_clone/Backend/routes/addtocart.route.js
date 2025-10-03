const express = require("express");
const {
  addtocartController,
  getAddToCartController,
  deleteAddtocartController,
} = require("../controllers/addtocart.controller");
const { isAuth } = require("../middlewares/isAuth");

const addtocartRoutes = express.Router();

addtocartRoutes.post("/add", isAuth, addtocartController);
addtocartRoutes.get("/get", isAuth, getAddToCartController);
addtocartRoutes.delete("/delete/:productid", isAuth, deleteAddtocartController);

module.exports = addtocartRoutes;
