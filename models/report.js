'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    static associate({Product,User}) {
        this.hasOne(Product,{foreignKey:"productId"})
        this.belongsToMany(User,{through:"User_Reports"})
    }
  };
  Report.init({
    reason: {
      type: DataTypes.TEXT
    },
    reports: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Report',
  });
  return Report;
};