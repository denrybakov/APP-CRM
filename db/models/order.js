'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Client, { foreignKey: 'client_id' })
      this.belongsTo(models.Brigade, { foreignKey: 'brigade_id' })
      this.belongsTo(models.Status, { foreignKey: 'status_id' })
      this.belongsTo(models.Mebel, { foreignKey: 'mebel_id' })
    }
  };
  Order.init({
    numZakaz: DataTypes.STRING,
    price: DataTypes.INTEGER,
    dateBuild: DataTypes.STRING,
    dateDeliverly: DataTypes.STRING,
    client_id: DataTypes.INTEGER,
    brigade_id: DataTypes.INTEGER,
    status_id: DataTypes.INTEGER,
    mebel_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
