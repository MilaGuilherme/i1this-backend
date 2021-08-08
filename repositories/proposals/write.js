const { Proposal } = require("../../models")


/**
 * @post proposals/
 * @param {Object} data
 * @returns {Object}
 */
async function insertProposal(data) {
  try {
    let res = await Proposal.create(data).catch(err => { return err })
    return res
  }
  catch (err) {
    return err;
  }
}

/**
 * @put proposals/{id}
 * @param {Object} data
 * @returns {Object}
 */
async function updateProposal(data) {
  try {
    let res = await Proposal.update(
      {
        ...data
      }, {
      where: {
        id: data.id
      }
    }).catch(err => { return err })
    return res
  }
  catch (err) {
    return err;
  }
}

module.exports = { insertProposal, updateProposal };