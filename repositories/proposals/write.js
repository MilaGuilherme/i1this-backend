const tables = require("../../db/tables.json")
const methods = require('../../helpers/methodsHelper');


/**
 * @post proposals/
 * @param {number} agent_id
 * @param {Object} data
 * @returns {Object}
 */
function insertProposal(data,agent_id) {
  return methods.insert(tables.proposalsTable, data, agent_id).then((response) => {
    return response
  })
}

/**
 * @put proposals/{id}
 * @param {number}  id
 * @param {number} agent_id
 * @param {Object} data
 * @returns {Object}
 */
function updateProposal(id, data, agent_id) {
  return methods.update(tables.proposalsTable, data, id, agent_id).then((response) => {
    return response
  })
}

module.exports = { insertProposal, updateProposal };