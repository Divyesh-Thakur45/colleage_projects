const {
  CreateProductService,
  GetAllProductsService,
  GetProductByIdService,
  UpdateProductService,
} = require("../services/product.service");

const CreateProductController = async (req, res) => {
  try {
    const {
      imageUrl,
      imageUrl2,
      rating,
      reviews,
      brand,
      sizeCollection,
      discount,
      price,
      frame,
    } = req.body;
    const result = await CreateProductService({
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
    if (result) {
      res.status(201).json({ message: "Product created successfully" });
    } else {
      res.status(400).json({ message: "Product creation failed" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllProductsController = async (req, res) => {
  try {
    const { _page, _limit, frame, brand, gender, _sort, _order, q } = req.query;

    const { products, total } = await GetAllProductsService({
      _page,
      _limit,
      frame,
      brand,
      gender,
      _sort,
      _order,
      q,
    });

    // send total count in headers
    res.set("X-Total-Count", total);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await GetProductByIdService(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const UpdateProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const result = await UpdateProductService(id, updateData);
    if (result) {
      res.status(200).json({ message: "Product updated successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  CreateProductController,
  getAllProductsController,
  getProductByIdController,
  UpdateProductController,
};
