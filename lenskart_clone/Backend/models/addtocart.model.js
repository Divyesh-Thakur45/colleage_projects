const mongoose = require("mongoose");

const addtocartSchema = new mongoose.Schema(
  {
    imageUrl: String,
    imageUrl2: String,
    rating: Number,
    reviews: Number,
    brand: String,
    sizeCollection: String,
    discount: String,
    price: Number,
    frame: String,
    userid: String,
  },
  {
    timestamps: true,
  }
);

const AddToCartModel = mongoose.model("addtocart", addtocartSchema);

module.exports = AddToCartModel;
