'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proposal extends Model {
    static associate({ User, Product }) {
      this.belongsTo(User, { foreignKey: 'userId' })
      this.belongsTo(Product, { foreignKey: 'productId' })
      this.belongsToMany(User, { as:"proposalId",through: 'accepted_proposals' })
    }
  };
  Proposal.init({
    photos: {
      type: DataTypes.JSON,
    },
    links: {
      type: DataTypes.STRING
    },
    price:{
      type:DataTypes.FLOAT,
      allowNull:false,
      validate:{
        isDecimal:true,
        is:'^\d+(\.\d{1,2})?$'
      }
    },
    minimunQty: {
      type: DataTypes.INTEGER,
    },
    requiresIntent: {
      type: DataTypes.BOOLEAN,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      value: true
    }
  }, {
    sequelize,
    modelName: 'Proposal',
  });
  return Proposal;
};