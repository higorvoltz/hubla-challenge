const CreatorModel = (sequelize, DataTypes) => {
  const Creator = sequelize.define('Creator', {
    name: DataTypes.STRING,
  });
  (async () => {
    await sequelize.sync({ force: true });
    // As funções vão aqui
})();

  return Creator;
};

module.exports = CreatorModel;