const AffiliatedModel = (sequelize, DataTypes) => {
  const Affiliated = sequelize.define('Affiliated', {
    name: DataTypes.STRING,
  });
  (async () => {
    await sequelize.sync({ force: true });
    // As funções vão aqui
})();

  return Affiliated;
};

module.exports = AffiliatedModel;