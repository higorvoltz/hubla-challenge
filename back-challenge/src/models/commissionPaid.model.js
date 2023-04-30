const CommissionPaidModel = (sequelize, DataTypes) => {
  const CommissionPaid = sequelize.define('CommissionPaid', {
    saleId: DataTypes.INTEGER,
    transactionTypeId: DataTypes.INTEGER
  });
  (async () => {
    await sequelize.sync({ force: true });
    // As funções vão aqui
})();

  return CommissionPaid;
};

module.exports = CommissionPaidModel;