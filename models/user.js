'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Product,UserType,Category,Proposal}) {
      this.hasMany(Proposal)
      this.hasMany(Product,{foreignKey:'UserId'})
      this.belongsToMany(Category,{through:'user_category',as:'category',unique: false,constraints: false})
      this.belongsToMany(Proposal,{through:'proposal_accepted',as:'accepted',unique: false,constraints: false})
      this.belongsToMany(Product,{through:'product_oned_by',as:'oned',unique: false,constraints: false})
      this.belongsTo(UserType)
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
      unique:true,
      validate:{
        isEmail:true
      }
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: true
    },
    UserTypeId:{
      type: DataTypes.INTEGER,
      defaultValue:3
    }
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};