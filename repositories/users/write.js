const tables = require("../../db/tables.json")
const methods = require('../../helpers/methodsHelper');

/**
 * @post /users
 * @param {Object} data
 * @param {number} agent_id
 * @returns {Object}
 */
function insertUser(data, agent_id) {
    return methods.insert(tables.userTable, data, agent_id).then((response) => {
        return response
    })
};

/**
 * @put /users/{id}
 * @param {Object} data
 * @param {number} id
 * @param {number} agent_id
 * @returns {Object}
 */
function updateUser(id, data, agent_id) {
    return methods.update(tables.userTable, data, id, agent_id).then((response) => {
        return response
    })
};


/**
 * @post /users/{user_id}/one/{product_id}
 * @param {Object} data
 * @param {number} user_id
 * @returns {Object}
 */
function insertOne(data,agent_id) {
    return methods.insert(tables.onedTable, data, agent_id).then((response) => {
        return response
    })
};

/**
* @post /users/{user_id}/category/{category_id}
* @param {Object} data
* @param {number} agent_id
* @returns {Object}
*/
function insertWatch(data,agent_id) {
    return methods.insert(tables.watchedTable, data, agent_id).then((response) => {
        return response
    })
};

/**
 * @post /users/{user_id}/proposals/{proposal_id}
* @param {number} user_id
* @param {number} proposal_id
* @param {number} agent_id
 * @returns {Object}
 */
function insertAccept(data, agent_id) {
    return methods.insert(tables.acceptedTable, data, agent_id).then((response) => {
        return response
    })
};

/**
 * @delete /users/{user_id}/one/{product_id}
 * @param {Object} data
 * @param {number} user_id
 * @returns {Object}
 */
function removeOne(data,agent_id) {
    return methods.remove(tables.onedTable, data, agent_id).then((response) => {
        return response
    })
};

/**
* @delete /users/{user_id}/category/{category_id}
* @param {Object} data
* @param {number} agent_id
* @returns {Object}
*/
function removeWatch(data,agent_id) {
    return methods.remove(tables.watchedTable, data, agent_id).then((response) => {
        return response
    })
};

/**
 * @delete /users/{user_id}/proposals/{proposal_id}
* @param {number} user_id
* @param {number} proposal_id
* @param {number} agent_id
 * @returns {Object}
 */
function removeAccept(data, agent_id) {
    return methods.remove(tables.acceptedTable, data, agent_id).then((response) => {
        return response
    })
};

module.exports = { insertUser, updateUser, insertOne, insertWatch, insertAccept,removeOne,removeAccept,removeWatch };