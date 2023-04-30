const TransactionTypeService = require('../services/transactionType.service');

const error500Message = 'Something goes wrong';
const transactionTypeNotFound = 'Transaction type not found';

const getAll = async (_req, res) => {
  try {
    const transactionTypes = await TransactionTypeService.getAll();
    return res.status(200).json(transactionTypes);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const transactionType = await TransactionTypeService.getById(id);

    if (!transactionType) return res.status(404).json({ message: transactionTypeNotFound });

    return res.status(200).json(transactionType);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
}

const createTransactionType = async (req, res) => {
  try {
    const { type, description, nature, signal } = req.body;
    const newTransactionType = await TransactionTypeService.createTransactionType(type, description, nature, signal);

    return res.status(201).json(newTransactionType);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
}

module.exports = {
  getAll,
  getById,
  createTransactionType
}