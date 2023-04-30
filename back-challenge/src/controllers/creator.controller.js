const CreatorService = require('../services/creator.service');

const error500Message = 'Something goes wrong';
const userNotFound = 'User not found';
const creatorDeleted = 'Creator deleted';

const getAll = async (_req, res) => {
  try {
    const creators = await CreatorService.getAll();
    return res.status(200).json(creators);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const creator = await CreatorService.getById(id);

    if (!user) return res.status(404).json({ message: userNotFound })

    return res.status(200).json(creator);
  } catch (e) {
    console.log(e.message)
    res.status(500).json({ message: error500Message });
  }
}

const createCreator = async (req, res) => {
  try {
    const { name } = req.body;
    const newCreator = await CreatorService.createCreator(name);

    return res.status(201).json(newCreator);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
}

const updateCreator = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const updatedCreator = await CreatorService.updateCreator(id, name);

    if (!updatedCreator) return res.status(404).json({ message: userNotFound })
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
}

const deleteCreator = async (req, res) => {
  try {
    const { id } = req.params;
    await CreatorService.deleteCreator(id);

    return res.status(204).json({ message: creatorDeleted });
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = {
  getAll,
  getById,
  createCreator,
  updateCreator,
  deleteCreator
};