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
 * @get proposals/{ProposalId}/users
 * @param {Number} ProposalId
 * @returns {Object}
 */
function getProposalUsers(ProposalId) {
  return methods.getBy(tables.acceptedTable, { "ProposalId": ProposalId }).then((response) => {
    return response
  })
}

module.exports = { getProposals, getProposalsByID, getProposalUsers };