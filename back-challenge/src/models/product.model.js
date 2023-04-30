const ProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    creatorId: DataTypes.INTEGER
  });
  (async () => {
    await sequelize.sync({ force: true });
    // As funções vão aqui
})();

  return Product;
};

module.exports = ProductModel;