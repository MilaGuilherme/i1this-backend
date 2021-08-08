'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Product,UserType,Category,Proposal}) {
      this.hasMany(Proposal)
      this.hasMany(Product)
      this.belongsToMany(Category,{through:'User_Category',as:'category'})
      this.belongsToMany(Proposal,{through:'Proposal_Accepted',as:'accepted'})
      this.belongsToMany(Product,{through:'Product_Oned_By',as:'oned'})
      this.belongsTo(UserType)
    }
  };

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    typeId:{
      type: DataTypes.INTEGER,
      defaultValue:3
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
      unique:true,
      validate:{
        isEmail:true
      }
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};