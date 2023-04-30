const SaleService = require('../services/sale.service');

const error500Message = 'Something goes wrong';
const saleNotFound = 'Sale not found';
const saleDeleted = 'Sale deleted';

const getAll = async (_req, res) => {
  try {
    const sales = await SaleService.getAll();
    return res.status(200).json(sales);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await SaleService.getById(id);

    if (!sale) return res.status(404).json({ message: saleNotFound });

    return res.status(200).json(sale);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
}

const createSale = async (req, res) => {
  try {
    const { productId, creatorAffiliatedId, transactionTypeId } = req.body;
    const newSale = await SaleService.createSale(productId, creatorAffiliatedId, transactionTypeId);

    return res.status(201).json(newSale);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
}

const updateSale = async (req, res) => {
  try {
    const { id } = req.params;
    const { productId, creatorAffiliatedId, transactionTypeId } = req.body;
    const updatedSale = await SaleService.updateSale(id, productId, creatorAffiliatedId, transactionTypeId);

    if (!updatedSale) return res.status(404).json({ message: saleNotFound });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
}

const deleteSale = async (req, res) => {
  try {
    const { id } = req.params;
    await SaleService.deleteSale(id);

    return res.status(204).json({ message: saleDeleted });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
}

module.exports = {
  getAll,
  getById,
  createSale,
  updateSale,
  deleteSale
}