'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'user_id' })
      this.hasMany(models.Order, { foreignKey: 'client_id' })
    }
  };
  Client.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    secondName: DataTypes.STRING,
    location: DataTypes.TEXT,
    comment: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};
