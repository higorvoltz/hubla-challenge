const CommissionPaidService = require('../services/commissionPaid.service');

const error500Message = 'Something goes wrong';
const CommissionPaidNotFound = 'Commission Paid not found';

const getAll = async (_req, res) => {
  try {
    const commissionPaids = await CommissionPaidService.getAll();
    return res.status(200).json(commissionPaids);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const commissionPaid = await CommissionPaidService.getById(id);

    if (!commissionPaid) return res.status(404).json({ message: CommissionPaidNotFound })

    return res.status(200).json(commissionPaid);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
}

const createCommissionPaid = async (req, res) => {
  try {
    const { saleId, transactionTypeId } = req.body;
    const newCommissionPaid = await CommissionPaidService.createCommissionPaid(saleId, transactionTypeId);

    return res.status(201).json(newCommissionPaid);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
}

module.exports = {
  getAll,
  getById,
  createCommissionPaid
}