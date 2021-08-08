'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({User,Category,Proposal}) {
      this.belongsTo(User)
      this.hasMany(Proposal)
      this.belongsToMany(Category,{through:'Product_Category',as:'category'})
      this.belongsToMany(User,{through:'Product_Oned_By',as:'oned_by_user'})
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
    ones:{
      type:DataTypes.INTEGER
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};