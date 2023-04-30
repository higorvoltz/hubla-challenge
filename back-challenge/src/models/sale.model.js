const SaleModel = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    productId: DataTypes.INTEGER,
    creatorAffiliatedId: DataTypes.INTEGER,
    transactionTypeId: DataTypes.INTEGER
  });
  (async () => {
    await sequelize.sync({ force: true });
    // As funções vão aqui
})();

  return Sale;
};

module.exports = SaleModel;