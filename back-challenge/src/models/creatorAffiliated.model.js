const CreatorAffiliatedModel = (sequelize, DataTypes) => {
  const CreatorAffiliated = sequelize.define('CreatorAffiliated', {
    creatorId: DataTypes.INTEGER,
    affiliatedId: DataTypes.INTEGER
  });
  (async () => {
    await sequelize.sync({ force: true });
    // As funções vão aqui
})();

  return CreatorAffiliated;
};

module.exports = CreatorAffiliatedModel;