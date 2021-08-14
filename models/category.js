'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({Product,Category,User}) {
        this.belongsToMany(Product,{through:'product_pategory',unique: false,constraints: false})
        this.belongsToMany(User,{through:'user_category',unique: false,constraints: false})
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
    paranoid: true,
    tableName: 'categories',
    modelName: 'Category',
  });
  return Category;
};