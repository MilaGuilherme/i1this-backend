'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({User,Category,Proposal}) {
      this.belongsTo(User)
      this.hasMany(Proposal)
      this.belongsToMany(Category,{through:'Product_Category',as:'categories',unique: false,constraints: false})
      this.belongsToMany(User,{through:'Product_Oned_By',as:'oned',unique: false,constraints: false})
    }
  };
  Product.init({
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    price:{
      type:DataTypes.FLOAT,
      allowNull:false,
      validate:{
        isDecimal:true
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    photos:{
      type:DataTypes.JSON
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Product',
    paranoid: true,
  });
  return Product;
};