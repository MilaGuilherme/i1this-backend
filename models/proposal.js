'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proposal extends Model {
    static associate({ User, Product }) {
      this.belongsTo(User)
      this.belongsTo(Product)
      this.belongsToMany(User,{through: 'proposal_accepted',as:"accepted",unique: false,constraints: false})
    }
  };
  Proposal.init({
    photos: {
      type: DataTypes.JSON,
    },
    link: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    price:{
      type:DataTypes.FLOAT,
      allowNull:false,
      validate:{
        isDecimal:true,
      }
    },
    minimunQty: {
      type: DataTypes.INTEGER,
    },
    requiresIntent: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:false
    },
    dueDate: {
      type: DataTypes.DATE,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'proposals',
    modelName: 'Proposal',
  });
  return Proposal;
};