'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({User,Category,Proposal}) {
      this.belongsTo(User)
      this.hasMany(Proposal)
      this.belongsToMany(Category,{through:'Product_Category'})
      this.belongsToMany(User,{through:'Product_Oned_By'})
    }
  };
  Product.init({
    name:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isUrl:false,
        isAlphanumeric:true,
      }
    },
    price:{
      type:DataTypes.FLOAT,
      allowNull:false,
      validate:{
        isDecimal:true,
        is:'^\d+(\.\d{1,2})?$'
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