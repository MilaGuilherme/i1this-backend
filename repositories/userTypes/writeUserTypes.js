const tables = require("../tables.json")
const methods = require('../methods');


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
 * @patch /usertypes/{id}
 * @param {Object} data
 * @param {number} id
 * @param {number} agent_id
 */
function updateUserType(data,id,agent_id) {
  return methods.update(tables.userTypesTable, data, id, agent_id).then((response) => {
            return response
        }) 
};

module.exports = { insertUserType , updateUserType };