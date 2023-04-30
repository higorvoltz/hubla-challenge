const { Sale } = require('../models');

/**
 * Retrieve all sales from the database.
 *
 * @async
 * @function getAll
 * @returns {Promise<Array<Sale>>} A promise that resolves to an array of Sale objects representing all sales in the database.
 */

/**
 * Retrieves a sale from the database by its ID.
 *
 * @param {number} id - The ID of the sale to retrieve.
 * @returns {Promise<object>} A Promise that resolves with the retrieved sale object.
 */

const getAll = async () => {
  const sales = await Sale.findAll();

  return sales;
}

/**
 * Finds a sale by its primary key ID.
 * @async
 * @param {number} id - The ID of the sale to find.
 * @returns {Promise<Sale>} - A Promise that resolves to the Sale object found, or null if not found.
 */

const getById = async (id) => {
  const sale = await Sale.findByPk(id);

  return sale;
}

/**
 * Creates a new sale object and saves it to the database.
 * @async
 * @function createSale
 * @param {number} productId - The ID of the product being sold.
 * @param {number} creatorAffiliatedId - The ID of the creator of the sale.
 * @param {number} transactionTypeId - The ID of the type of transaction being performed.
 * @returns {Promise<object>} A Promise that resolves to the newly created sale object.
 */

const createSale = async (productId, creatorAffiliatedId, transactionTypeId) => {
  const newSale = await Sale.create({
    productId,
    creatorAffiliatedId,
    transactionTypeId
  });

  return newSale;
}

/**
 * Update a sale with the given ID with the new product ID, creator affiliated ID, and transaction type ID.
 * @param {number} id - The ID of the sale to update.
 * @param {number} productId - The ID of the new product to associate the sale with.
 * @param {number} creatorAffiliatedId - The ID of the creator affiliated with the sale.
 * @param {number} transactionTypeId - The ID of the transaction type associated with the sale.
 * @returns {Promise<Object>} - A Promise that resolves to the updated sale object.
 */

const updateSale = async (id, productId, creatorAffiliatedId, transactionTypeId) => {
  const [updatedSale] = await Sale.update(
    { productId, creatorAffiliatedId, transactionTypeId },
    { where: { id } },
  );

  console.log(updatedSale);
  return updatedSale;
}

/**
 * Deletes a Sale record with the given ID from the database.
 *
 * @async
 * @param {number} id - The ID of the Sale record to delete.
 * @returns {Promise<object>} - A Promise that resolves to the deleted Sale record.
 */

const deleteSale = async (id) => {
  const sale = await Sale.destroy(
    { where: { id } },
  );

  console.log(sale);
  return sale;
}

module.exports = {
  getAll,
  getById,
  createSale,
  updateSale,
  deleteSale
}