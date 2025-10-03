const ProductsModel = require("../models/product.model");

const CreateProductService = async ({
  imageUrl,
  imageUrl2,
  rating,
  reviews,
  brand,
  sizeCollection,
  discount,
  price,
  frame,
}) => {
  try {
    const newProduct = new ProductsModel({
      imageUrl,
      imageUrl2,
      rating,
      reviews,
      brand,
      sizeCollection,
      discount,
      price,
      frame,
    });
    await newProduct.save();
    return newProduct;
  } catch (error) {
    throw new Error("Product creation failed");
  }
};

const GetAllProductsService = async ({
  _page,
  _limit,
  frame,
  brand,
  gender,
  _sort,
  _order,
  q,
}) => {
  try {
    // Query filter
    let query = {};
    if (frame) query.frame = frame;
    if (brand) query.brand = brand;
    if (gender) query.gender = gender;

    // Search in brand / frame fields
    if (q) {
      query.$or = [
        { brand: { $regex: q, $options: "i" } },
        { frame: { $regex: q, $options: "i" } },
      ];
    }

    // Sorting
    let sort = {};
    if (_sort && _order) {
      sort[_sort] = _order === "asc" ? 1 : -1;
    }

    // Pagination
    const page = parseInt(_page) || 1;
    const limit = parseInt(_limit) || 6;
    const skip = (page - 1) * limit;

    // DB queries
    const total = await ProductsModel.countDocuments(query);
    const products = await ProductsModel.find(query)
      .sort(sort)
      .skip(skip)
      .limit(limit);

    // Return data to controller
    return { products, total };
  } catch (error) {
    throw new Error(error.message || "Failed to fetch products");
  }
};

const GetProductByIdService = async (id) => {
  try {
    const product = await ProductsModel.findById(id);
    return product;
  } catch (error) {
    throw new Error("Failed to retrieve product");
  }
};

const UpdateProductService = async (id, updateData) => {
  try {
    const updatedProduct = await ProductsModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );
    return updatedProduct;
  } catch (error) {
    throw new Error("Failed to update product");
  }
};

module.exports = {
  CreateProductService,
  GetAllProductsService,
  GetProductByIdService,
  UpdateProductService,
};
