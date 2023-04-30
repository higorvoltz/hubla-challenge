const { Product } = require('../models');

/**
 * Retrieve all products from the database.
 * @async
 * @function
 * @returns {Promise<Array>} - A promise that resolves to an array of products.
 */

const getAll = async () => {
  const products = await Product.findAll();

  return products;
}

/**
 * Retrieves a product by its ID.
 *
 * @async
 * @function getById
 * @param {number} id - The ID of the product to retrieve.
 * @returns {Promise<Product>} A Promise that resolves to the retrieved product,
 * or null if no product with the specified ID exists.
 */

const getById = async (id) => {
  const product = await Product.findByPk(id);

  return product;
}

/**
 * Creates a new product with the given name, price, and creator ID,
 * and returns it.
 *
 * @param {string} name - The name of the product.
 * @param {number} price - The price of the product.
 * @param {string} creatorId - The ID of the user who created the product.
 * @returns {Promise<object>} A Promise that resolves with the newly created product.
 */

const createProduct = async (name, price, creatorId) => {
  const newProduct = await Product.create({
    name,
    price,
    creatorId
  });

  return newProduct;
}

/**
 * Updates the product with the given ID with the new name, price, and creator ID.
 * @async
 * @function updateProduct
 * @param {number} id - The ID of the product to update.
 * @param {string} name - The new name of the product.
 * @param {number} price - The new price of the product.
 * @param {number} creatorId - The new creator ID of the product.
 * @returns {Promise<object>} - The updated product object.
 */

const updateProduct = async (id, name, price, creatorId) => {
  const [updatedProduct] = await Product.update(
    { name, price, creatorId },
    { where: { id } },
  );

  console.log(updatedProduct);
  return updatedProduct;
}


/**
 * Deletes a product with the given ID from the database.
 * @param {number} id - The ID of the product to delete.
 * @returns {Promise<object>} The deleted product object.
 */

const deleteProduct = async (id) => {
  const product = await Product.destroy(
    { where: { id } },
  );

  console.log(product);
  return product;
}

module.exports = {
  getAll,
  getById,
  createProduct,
  updateProduct,
  deleteProduct
}