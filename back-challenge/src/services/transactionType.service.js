const { TransactionType } = require('../models');

/**
 * Retrieves all transaction types from the database.
 * @async
 * @function
 * @returns {Promise<Array<TransactionType>>} - A Promise that resolves to an array
 * of TransactionType objects.
 */

const getAll = async () => {
  const transactionTypes = await TransactionType.findAll();

  return transactionTypes;
}

/**
 * Finds a TransactionType by its ID.
 *
 * @async
 * @param {number} id - The ID of the TransactionType to find.
 * @returns {Promise<TransactionType>} - A Promise that resolves to the found TransactionType.
 */

const getById = async (id) => {
  const transactionType = await TransactionType.findByPk(id);

  return transactionType;
}

/**
 * Create a new transaction type with the given name, description, nature, and signal.
 * @param {string} name - The name of the transaction type.
 * @param {string} description - The description of the transaction type.
 * @param {string} nature - The nature of the transaction type (e.g. "debit" or "credit").
 * @param {number} signal - The signal of the transaction type (-1 or 1).
 * @returns {Promise<object>} A promise that resolves to the newly created transaction type object.
 */

const createTransactionType = async (name, description, nature, signal) => {
  const newTransactionType = await TransactionType.create({
    name,
    description,
    nature,
    signal
  });

  return newTransactionType;
}

module.exports = {
  getAll,
  getById,
  createTransactionType
}