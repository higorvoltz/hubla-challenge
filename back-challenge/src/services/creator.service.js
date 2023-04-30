const { Creator } = require('../models');

/**
 * Retrieve all creators from the database.
 *
 * @async
 * @function
 * @returns {Promise<Creator[]>} The list of all creators.
 */
const getAll = async () => {
  const creators = await Creator.findAll();

  return creators;
}

/**
 * Retrieves a Creator record from the database by its primary key.
 *
 * @async
 * @param {number} id - The primary key of the Creator record to retrieve.
 * @returns {Promise<Creator|null>} - The retrieved Creator record, or null if no
 *     record matches the given primary key.
 */
const getById = async (id) => {
  const creator =  await Creator.findByPk(id);

  return creator;
}

/**
 * Creates a new Creator object with the provided name.
 *
 * @async
 * @param {string} name - The name of the creator to be created.
 * @returns {Promise<object>} - A Promise that resolves with the new Creator object.
 */

const createCreator = async (name) => {
  const newCreator = await Creator.create({
   name
  });

  return newCreator;
}

/**
 * Update the name of a creator with the given ID.
 * @async
 * @param {number} id - The ID of the creator to update.
 * @param {string} name - The new name of the creator.
 * @returns {Promise<object>} The updated creator object.
 */

const updateCreator = async (id, name) => {
  const [updatedCreator] = await Creator.update(
    { name },
    { where: { id } },
  )

  console.log(updatedCreator);
  return updatedCreator;
}

/**
 * Delete a creator with the given ID.
 *
 * @param {number} id - The ID of the creator to delete.
 * @returns {Promise<object>} A Promise that resolves with the deleted creator object.
 */

const deleteCreator = async (id) => {
  const creator = await Creator.destroy(
    { where: { id }},
  );

  console.log(creator);
  return creator;
}

module.exports = {
  getAll,
  getById,
  createCreator,
  updateCreator,
  deleteCreator
}