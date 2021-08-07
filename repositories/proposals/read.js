 const methods = require('../../helpers/methodsHelper');


/**
 * @get proposals/
 * @returns {Object}
 */
function getProposals() {
  return methods.getAll(tables.proposalsTable).then((response) => {
    return response
  })
}

/**
 * @get proposals/{id}
 * @param {Number} id
 * @returns {Object}
 */
function getProposalsByID(id) {
  return methods.getBy(tables.proposalsTable, { "id": id }).then((response) => {
    return response
  })
}

/**
 * @get proposals/{proposal_id}/users
 * @param {Number} proposal_id
 * @returns {Object}
 */
function getProposalUsers(proposal_id) {
  return methods.getBy(tables.acceptedTable, { "proposal_id": proposal_id }).then((response) => {
    return response
  })
}

module.exports = { getProposals, getProposalsByID, getProposalUsers };