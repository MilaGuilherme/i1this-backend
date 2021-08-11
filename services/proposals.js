
const read = require('../repositories/proposals/read')
const write = require('../repositories/proposals/write')
const statusHelper = require("../helpers/statusHelper");

//TODO TEST THIS

/*
* GET SERVICES
*/

/**
 * @get /users
 * @param {Object} filter
 * @returns {Promise}
 */
async function get(filter = null) {
    filter = {
        where: {
            ...filter,
            active: true
        },        
    }
    return read.get(filter).then((response) => {
        return statusHelper(response, "No users where found")
    })
}

/**
 * @get /proposals
 * @param {Object} filter
 * @returns {Promise}
 */
async function get(filter = null) {
    filter = {
        where: {
            ...filter,
            active: true
        },
    }
    return read.get(filter).then((response) => {
        return statusHelper(response, "No proposals found")
    })
}

/**
 * @get proposals/{ProposalId}/users
 * @param {Object} filter
 * @returns {Promise}
 */
async function getProposalAcceptees(filter) {
    filter = {
        where: {
            ...filter,
            active: true
        },
    }
    return read.getProposalUsers(filter).then((response) => {
        return statusHelper(response, "No proposals found")
    })
}

/*
* POST SERVICES
*/

/**
 * @post /proposals
 * @param {Object} data
 * @param {Number} auth
 * @returns {Promise}
 */
async function post(data,auth) {
    if (auth.user == data.userId || auth.type == 1) {
        return write.insertProposal(data)
            .then(response => {
                return statusHelper(response)
            })
    }
    else {
        res = { "status": 403, "message": "Forbidden", "content": '' }
        return res;
    }
}

/*
* PUT SERVICES
*/

/**
 * @put /categories/{CategoryId}
 * @param {Object} data
 * @param {number} auth
 * @returns {Promise}
 */
async function update(data,auth) {
    if (auth.user == data.userId || auth.type == 1) {
        return write.updateProposal(data)
            .then(response => {
                return statusHelper(response)
            })
    }
    else {
        res = { "status": 403, "message": "Forbidden", "content": '' }
        return res;
    }
}

module.exports = { get, getProposalAcceptees, post, update }