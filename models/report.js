'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    static associate({Product,User}) {
        this.belongsTo(Product)
        this.belongsTo(User)
    }
  };
  Report.init({
    reason: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Report',
  });
  return Report;
};