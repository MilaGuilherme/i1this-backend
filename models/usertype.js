'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserType extends Model {
    static associate() {
    }
  };
  UserType.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    permissions:{
      type:DataTypes.JSON
    }
  }, {
    sequelize,
    tableName: 'user_types',
    modelName: 'UserType',
  });
  return UserType;
};