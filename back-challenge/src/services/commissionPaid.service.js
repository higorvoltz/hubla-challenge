const { CommissionPaid } = require('../models');

/**
 * Retrieves all commission paid records from the database
 *
 * @async
 * @function getAll
 * @returns {Promise<Array>} Returns a promise that resolves to an array of commission paid records
 */

const getAll = async () => {
  const commissionPaids = await CommissionPaid.findAll();

  return commissionPaids;
}

/**
 * Retrieve a CommissionPaid object by its ID.
 * @async
 * @param {number} id - The ID of the CommissionPaid object to retrieve.
 * @returns {Promise<CommissionPaid>} A promise that resolves with the CommissionPaid object
 * if found, or rejects with an error if not found or an error occurs while retrieving it.
 */

const getById = async (id) => {
  const commissionPaid = await CommissionPaid.findByPk(id);

  return commissionPaid;
}

/**
 * Creates a new CommissionPaid object with the given saleId and transactionTypeId.
 * @async
 * @param {string} saleId - The ID of the sale associated with the commission.
 * @param {string} transactionTypeId - The ID of the transaction type associated with the commission.
 * @returns {Promise<CommissionPaid>} A promise that resolves with the newly created CommissionPaid object.
 */

const createCommissionPaid = async (saleId, transactionTypeId) => {
  const newCommissionPaid = await CommissionPaid.create({
    saleId,
    transactionTypeId
  });

  return newCommissionPaid;
}

module.exports = {
  getAll,
  getById,
  createCommissionPaid
}