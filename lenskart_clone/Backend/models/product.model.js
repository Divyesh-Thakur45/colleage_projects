const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  imageUrl: String,
  imageUrl2: String,
  rating: Number,
  reviews: Number,
  brand: String,
  sizeCollection: String,
  discount: String,
  price: Number,
  frame: String,
});

const ProductsModel = mongoose.model("Products", productSchema);

module.exports = ProductsModel;
