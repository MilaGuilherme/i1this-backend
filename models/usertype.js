'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserType extends Model {
    static associate({User}) {
      this.hasMany(User,{defaultValue:3})
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
    tableName: 'usertypes',
    modelName: 'UserType',
  });
  return UserType;
};