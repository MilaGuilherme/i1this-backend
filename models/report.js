'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    static associate({Product,User}) {
        this.belongsTo(Product,{as:'product'})
        this.belongsTo(User,{as:'user'})
    }
  };
  Report.init({
    reason: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    tableName: 'reports',
    modelName: 'Report',
  });
  return Report;
};