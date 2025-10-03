const express = require("express");
const {
  CreateProductController,
  getAllProductsController,
  getProductByIdController,
  UpdateProductController,
} = require("../controllers/product.controller");

const ProductsRoutes = express.Router();

// create product
ProductsRoutes.post("/create", CreateProductController);

// get all products
ProductsRoutes.get("/all", getAllProductsController);

// get product by id
ProductsRoutes.get("/:id", getProductByIdController);

//update product
ProductsRoutes.put("/:id", UpdateProductController);

module.exports = ProductsRoutes;
