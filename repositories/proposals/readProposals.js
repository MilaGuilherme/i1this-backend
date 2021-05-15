const tables = require("../tables.json")
const methods = require('../methods');


/**
 * @get proposals/
 * @returns {Object}
 */
function getProposals() {
    try {
        methods.getAll(tables.proposalsTable).then((data) => {
            let res = data.length === 0 ? `No products found` : data
            return res
        })
    }
    catch (err) {
        return err
    }
}

/**
 * @get proposals/{id}
 * @param {Number} id
 * @returns {Object}
 */
function getProposalsByID(id) {
    const data = { "id": id }
    try {
        methods.getBy(tables.proposalsTable, data).then((data) => {
            let res = data.length === 0 ? `No proposal with the ID ${id} was found` : data
            return res
        })
    }
    catch (err) {
        return err
    }
}

/**
 * @get proposals/{proposal_id}/users
 * @param {Number} proposal_id
 * @returns {Object}
 */
function getProposalUsers(proposal_id) {
    const data = { "proposal_id": proposal_id }
    try {
        methods.getBy(tables.acceptedTable, data).then((data) => {
            let res = data.length === 0 ? `No users who accepted the proposal of ID ${proposal_id} were found` : data
            return res
        })
    }
    catch (err) {
        return err
    }
}

module.exports = { getProposals , getProposalsByID , getProposalUsers };