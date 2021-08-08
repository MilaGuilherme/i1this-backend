
const read = require('../repositories/userTypes/read')
const write = require('../repositories/userTypes/write')
const statusHelper = require("../helpers/statusHelper");


//TODO TEST THIS

/*
* GET SERVICES
*/

/**
 * @param {Object} filter
 * @returns {Promise}
 */
async function get(filter = null) {
    filter = {
        where: {
            ...filter
        },
        attributes: ['id', 'name']
    }
    return read.get(filter).then((response) => {
        return statusHelper(response,"No usertypes where found")
    })
}

/**
 * @param {Object} filter
 * @returns {Promise}
 */
async function getTypeUsers(filter) {
    filter = {
        where: {
            ...filter
        },
    }
    return read.getUsers(filter).then((response) => {
        response[0].permissions = undefined
        return statusHelper(response,"No users of this usertype found")
    })
}

/*
* POST SERVICES
*/

/**
 * @post /usertypes
 * @param {Object} data
 * @param {Number} auth
 * @returns {Promise}
 */
async function post(data, auth) {
    if (auth.type == 1) {
        return write.insertUserType(data)
            .then(response => {
                return statusHelper(response)
            })
    }
    else {
        res = { "status": 403, "message": "Forbidden", "content": `` }
        return res;
    }
}

/*
* PUT SERVICES
*/

/**
 * @put /usertypes/{id}
 * @param {Object} data
 * @param {Number} auth
 * @returns {Promise}
 */
async function update(data, auth) {
    if (auth.type == 1) {
        return write.updateUserType(data)
            .then(response => {
                return statusHelper(response)
            })
    }
    else {
        res = { "status": 403, "message": "Forbidden", "content": `` }
        return res;
    }
}

module.exports = { get, getTypeUsers, post, update }