const { Affiliated } = require('../models');

/**
 * Retrieve all affiliates from the database.
 *
 * @async
 * @function getAll
 * @returns {Promise<Array>} A promise that resolves to an array of affiliates.
 */

const getAll = async () => {
  const affiliates = await Affiliated.findAll();

  return affiliates;
}

/**
 * Retrieves an affiliated object from the database by its ID.
 *
 * @param {number} id - The ID of the affiliated object to retrieve.
 * @returns {Promise<Object>} - A Promise that resolves to the affiliated object.
 */

const getById = async (id) => {
  const affiliate = await Affiliated.findByPk(id);

  return affiliate;
}

/**
 * Creates a new affiliated object with the given name, price, and creator ID.
 *
 * @param {string} name - The name of the new affiliated object.
 * @param {number} price - The price of the new affiliated object.
 * @param {string} creatorId - The ID of the user who created the affiliated object.
 * @returns {Promise<Object>} - A promise that resolves to the newly created affiliated object.
 */

const createAffiliated = async (name, price, creatorId) => {
  const newAffiliated = await Affiliated.create({
    name,
    price,
    creatorId
  });

  return newAffiliated;
}

/**
 * Update an affiliated record with the given ID, name, price, and creator ID.
 *
 * @param {number} id - The ID of the affiliated record to update.
 * @param {string} name - The new name of the affiliated record.
 * @param {number} price - The new price of the affiliated record.
 * @param {number} creatorId - The new creator ID of the affiliated record.
 * @returns {Promise<object>} - A Promise that resolves to the updated affiliated record.
 */

const updateAffiliated = async (id, name, price, creatorId) => {
  const [updatedAffiliated] = await Affiliated.update(
    { name, price, creatorId },
    { where: { id } },
  );

  console.log(updatedAffiliated);
  return updatedAffiliated;
}

/**
 * Delete an affiliated record by ID.
 *
 * @async
 * @param {number} id - The ID of the affiliated record to delete.
 * @returns {Promise<Object>} The deleted affiliated record.
 * @throws {SequelizeError} If the deletion fails.
 */

const deleteAffiliated = async (id) => {
  const affiliate = await Affiliated.destroy(
    { where: { id } },
  );

  console.log(affiliate);
  return affiliate;
}

module.exports = {
  getAll,
  getById,
  createAffiliated,
  updateAffiliated,
  deleteAffiliated
}