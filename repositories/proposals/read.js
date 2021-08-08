const { User,Proposal } = require("../../models")
const { Op } = require("sequelize");


/**
 * @param {Object} filter
 * @returns {Object}
 */
 async function get(filter) {
  try {
    return await Proposal.findAll(filter);
  }
  catch (err) {
    return err;
  }
}

/**
 * @get proposals/{ProposalId}/users
 * @param {Object} filter
 * @returns {Object}
 */
async function getProposalUsers(filter) {
  filter = {
    ...filter,
    include: [{
      model: User,
      as: 'accepted',
      where: { id:{[Op.not]:null} },
      attributes: ['id', 'name', 'email', 'UserTypeId']
    }]
  }
  try {
    return await Proposal.findAll(filter);
  }
  catch (err) {
    return err;
  }
}



module.exports = { get, getProposalUsers };