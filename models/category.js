'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({Product,Category,User}) {
        this.belongsToMany(Product,{through:'Product_Category',unique: false,constraints: false})
        this.belongsToMany(User,{through:'User_Category',unique: false,constraints: false})
        this.belongsTo(Category,{as:"parent"})
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