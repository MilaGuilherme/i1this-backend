const tables = require("../tables.json")
const methods = require('../methods');

/**
 * @post /users
 * @param {Object} data
 * @param {number} agent_id
 * @returns {Object}
 */
function insertUser(data,agent_id) {
    try {
        methods.insert(tables.userTable, data, agent_id).then((res) => {
            return res
        })
    }
    catch (err) {
        return err
    }
};

/**
 * @patch /users/{id}
 * @param {Object} data
 * @param {number} id
 * @param {number} agent_id
 * @returns {Object}
 */
function updateUser(id, data,agent_id) {
    try {
        methods.update(tables.userTable, data, id, agent_id).then((res) => {
            return res
        })
    }
    catch (err) {
        return err
    }
};


/**
 * @post /users/{user_id}/one/{product_id}
 * @param {number} user_id
 * @param {number} product_id
 * @param {number} agent_id
 * @returns {Object}
 */
function insertOne(agent_id,user_id,product_id) {
    let data = {
        "user_id": user_id,
        "product_id": product_id
    }
    try {
        methods.insert(tables.onedTable, data, agent_id).then((res) => {
            return res
        })
    }
    catch (err) {
        return err
    }
};

/**
* @post /users/{user_id}/category/{category_id}
* @param {number} user_id
* @param {number} category_id
* @param {number} agent_id
* @returns {Object}
*/
function insertWatch(user_id, category_id,agent_id) {
    let data = {
        "user_id": user_id,
        "category_id": category_id
    }
    try {
        methods.insert(tables.watchedTable, data, agent_id).then((res) => {
            return res
        })
    }
    catch (err) {
        return err
    }
};

/**
 * @post /users/{user_id}/proposals/{proposal_id}
* @param {number} user_id
* @param {number} proposal_id
* @param {number} agent_id
 * @returns {Object}
 */
function insertAccept(user_id, proposal_id,agent_id) {
    let data = {
        "user_id": user_id,
        "proposal_id": proposal_id
    }
    try {
        methods.insert(tables.acceptedTable, data, agent_id).then((res) => {
            return res
        })
    }
    catch (err) {
        return err
    }
};

module.exports = { insertUser, updateUser, insertOne, insertWatch, insertAccept };