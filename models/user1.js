'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user1.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user1',
  });
  return user1;
};