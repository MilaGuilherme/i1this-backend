'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({Product,Category,User}) {
        this.belongsToMany(Product,{through:'Product_Category'})
        this.belongsToMany(User,{through:'User_Category'})
        this.belongsTo(Category,{as:"parentId"})
    }
  };
  Category.init({
    name: {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};