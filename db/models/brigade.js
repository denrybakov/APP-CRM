'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brigade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Brigade, { foreignKey: 'brigade_id' })
    }
  };
  Brigade.init({
    nameBr: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brigade',
  });
  return Brigade;
};
