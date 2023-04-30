const TransactionTypeModel = (sequelize, DataTypes) => {
  const TransactionType = sequelize.define('TransactionType', {
    type: DataTypes.INTEGER,
    description: DataTypes.STRING,
    nature: DataTypes.STRING,
    signal: DataTypes.STRING
  });
  (async () => {
    await sequelize.sync({ force: true });
    // As funções vão aqui
})();

  return TransactionType;
};

module.exports = TransactionTypeModel;