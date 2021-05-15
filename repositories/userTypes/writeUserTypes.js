const tables = require("../tables.json")
const methods = require('../methods');


/**
 * @post /usertypes
 * @param {Object} data
 * @param {number} agent_id
 * @returns {Object}
 */
function insertUserType(data) {
    try {
        methods.insert(tables.userTypesTable, data, agent_id).then((res) => {
            return res
        })
    }
    catch (err) {
        return err
    }
};

/**
 * @patch /usertypes/{id}
 * @param {Object} data
 * @param {number} id
 * @param {number} agent_id
 */
function updateUserType(data,id,agent_id) {
    try {
        methods.update(tables.userTypesTable, data, id, agent_id).then((res) => {
            return res
        })
    }
    catch (err) {
        return err
    }
};

module.exports = { insertUserType , updateUserType };