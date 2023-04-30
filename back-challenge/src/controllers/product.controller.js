const ProductService = require('../services/product.service');

const error500Message = 'Something goes wrong';
const productNotFound = 'Product not found';
const productDeleted = 'Product deleted';

const getAll = async (_req, res) => {
  try {
    const products = await ProductService.getAll();
    return res.status(200).json(products);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductService.getById(id);

    if (!product) return res.status(404).json({ message: productNotFound })

    return res.status(200).json(product);
} catch (e) {
  console.log(e.message);
  res.status(500).json({ message: error500Message });
}
}

const createProduct = async (req, res) => {
  try {
    const { name, price, creatorId } = req.body;
    const newProduct = await ProductService.createProduct(name, price, creatorId);

    return res.status(201).json(newProduct);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
}

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, creatorId } = req.body;
    const updatedProduct = await ProductService.updateProduct(id, name, price, creatorId);

    if (!updatedProduct) return res.status(404).json({ message: productNotFound })
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await ProductService.deleteProduct(id);

    return res.status(204).json({ message: productDeleted });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
}

module.exports = {
  getAll,
  getById,
  createProduct,
  updateProduct,
  deleteProduct
}