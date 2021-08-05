'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Product,UserType,Category}) {
      this.hasMany(Product,{foreignKey:'productId'})
      this.belongsToMany(Category,{through:'User_Categories'})
      this.belongsTo(UserType,{foreignKey:'typeId'})
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:[6,120]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail:true
      }
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
      value: true
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};