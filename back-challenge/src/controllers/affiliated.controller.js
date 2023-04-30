const AffiliatedService = require('../services/affiliated.service');

const error500Message = 'Something goes wrong';
const affiliatedNotFound = 'Affiliated not found';
const affiliatedDeleted = 'Affiliated deleted';

const getAll = async (_req, res) => {
  try {
    const affiliates = await AffiliatedService.getAll();
    return res.status(200).json(affiliates);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const affiliated = await AffiliatedService.getById(id);

    if (!affiliated) return res.status(404).json({ message: affiliatedNotFound })

    return res.status(200).json(affiliated);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
}

const createAffiliated = async (req, res) => {
  try {
    const { name } = req.body;
    const newAffiliated = await AffiliatedService.createAffiliated(name);

    return res.status(201).json(newAffiliated);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
}

const updateAffiliated = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedAffiliated = await AffiliatedService.updateAffiliated(id, name);

    if (!updatedAffiliated) return res.status(404).json({ message: affiliatedNotFound })
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
}

const deleteAffiliated = async (req, res) => {
  try {
    const { id } = req.params;
    await AffiliatedService.deleteAffiliated(id);

    return res.status(204).json({ message: affiliatedDeleted });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
}

module.exports = {
  getAll,
  getById,
  createAffiliated,
  updateAffiliated,
  deleteAffiliated
}