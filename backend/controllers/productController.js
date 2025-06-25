const Product = require(`../models/Product`);


exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get /api/products/:id
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: `Product not found` });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: `Failed to fetch the product`, error: error.message });
  }
};

// POST /api/products
exports.creatProduct = async (req, res) => {
  try {
    const { name, price, description, category, stock, imageUrl } = req.body;
    const newProduct = await Product.create({ name, price, description, category, stock, imageUrl });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: `Failed to create product`, error: error.message });
  }
};

// PATCH /api/products/:id
exports.updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: `Product not found` });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: `Failed to update product`, error: error.message });
  }
};
