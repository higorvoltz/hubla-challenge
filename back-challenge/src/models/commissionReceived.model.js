const CommissionReceivedModel = (sequelize, DataTypes) => {
  const CommissionReceived = sequelize.define('CommissionReceived', {
    saleId: DataTypes.INTEGER,
    transactionTypeId: DataTypes.INTEGER
  });
  (async () => {
    await sequelize.sync({ force: true });
    // As funções vão aqui
})();

  return CommissionReceived;
};

module.exports = CommissionReceivedModel;