const tables = require("../../db/tables.json")
const methods = require('../../helpers/methodsHelper');


/**
 * @post /usertypes
 * @param {Object} data
 * @param {number} agent_id
 * @returns {Object}
 */
function insertUserType(data) {
  return methods.insert(tables.userTypesTable, data, agent_id).then((response) => {
    return response
  })
};

/**
 * @put /usertypes/{id}
 * @param {Object} data
 * @param {number} id
 * @param {number} agent_id
 */
function updateUserType(data, id, agent_id) {
  return methods.update(tables.userTypesTable, id, data, agent_id).then((response) => {
    return response
  })
};

module.exports = { insertUserType, updateUserType };