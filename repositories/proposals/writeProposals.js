const tables = require("../tables.json")
const methods = require('../methods');


/**
 * @post proposals/
 * @param {number} agent_id
 * @param {Object} data
 * @returns {Object}
 */
function insertProposal(agent_id, data) {
    try {
        methods.insert(tables.proposalsTable, data, agent_id).then((res) => {
            return res
        })
    }
    catch (err) {
        return err
    }
}

/**
 * @patch proposals/{id}
 * @param {number} agent_id
 * @param {number}  id
 * @param {Object} data
 * @returns {Object}
 */
function updateProposal(agent_id, id, data) {
    try {
        methods.update(tables.proposalsTable, data, id, agent_id).then((res) => {
            return res
        })
    }
    catch (err) {
        return err
    }
}

module.exports = { insertProposal ,updateProposal };