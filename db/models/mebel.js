'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mebel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order, { foreignKey: 'mebel_id' })
    }
  };
  Mebel.init({
    nameMeb: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mebel',
  });
  return Mebel;
};
