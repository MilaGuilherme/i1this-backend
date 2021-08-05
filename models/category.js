'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({Product,User,Category}) {
        this.hasMany(Product,{foreignKey:"productId"})
        this.hasMany(User,{foreignKey:"userId"})
        this.belongsTo(Category,{as:"parentId"})
    }
  };
  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};