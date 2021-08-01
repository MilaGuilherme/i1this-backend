const db = require('../db/db')
const dotenv = require('dotenv');
const writelogs = require('../repositories/logs/write');
const log = writelogs.log;
const errorHelper = require("./errorHelper");
dotenv.config();

/**
 * @param {string} tableName
 * @param {Object} data
 * @param {number} agent_id
 * @returns {Promise}
 */
function insert(tableName, data, agent_id) {
    return db(tableName)
        .insert(data)
        .then(id => {
            return db(tableName)
                .where({ "id": id })
                .then((response) => {
                    log(tableName, "insert", response, agent_id, "", JSON.stringify(data))
                    process.env.NODE_ENV === 'development' ? console.log(response) : null;
                    return response
                })
        })
        .catch(error => {
            let err = errorHelper(error);
            process.env.NODE_ENV === 'development' ? console.log(err) : null;
            return err
        })
}

/**
 * @param {string} tableName
 * @param {Object} condition
 * @param {Object} data
 * @param {number} agent_id
 * @returns {Promise}
 */
function update(tableName, condition, data, agent_id) {
    db(tableName)
        .where(condition)
        .then((response) => {
            if (response.length > 0)
                log(tableName, "update", response.id, agent_id, JSON.stringify(response), JSON.stringify(data))
            else { }
        })
    return db(tableName)
        .where(condition)
        .update(data)
        .then((id) => {
            return db(tableName)
                .where({ "id": id })
                .then((response) => {
                    process.env.NODE_ENV === 'development' ? console.log(response) : null;
                    return response;
                })
        })
        .catch((error) => {
            let err = errorHelper(error)
            process.env.NODE_ENV === 'development' ? console.log(err) : null;
            return err;
        })
};

/**
 * @param {string} tableName
 * @param {Object} condition
 * @param {Object} data
 * @param {number} agent_id
 * @returns {Promise}
 */
function updateBatch(tableName, condition, data, agent_id) {
    db(tableName).where(condition)
        .then((response) => {
            if (response.length > 0)
                log(tableName, "updated in batch", null, agent_id, JSON.stringify(response), JSON.stringify(data))
            else { }
        })
    return db(tableName)
        .where(condition)
        .update(data)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            let err = errorHelper(error)
            process.env.NODE_ENV === 'development' ? console.log(err) : null;
            return err;
        })
};

/**
 * @param {string} tableName
 * @param {Object} condition
 * @param {number} agent_id
 * @returns {Promise}
 */
function remove(tableName, condition, agent_id) {
    db(tableName)
        .where(condition)
        .then((response) => {
            if (response.length > 0)
                log(tableName, "remove", response.id, agent_id, JSON.stringify(response), "deleted")
            else { }
        })
    return db(tableName)
        .where(condition)
        .del()
        .then((response) => {
            process.env.NODE_ENV == 'development' ? console.log(response) : null;
            return response;
        })
        .catch((error) => {
            let err = errorHelper(error)
            process.env.NODE_ENV === 'development' ? console.log(err) : null;
            return err;
        })
};

/**
 * @param {string} tableName
 * @param {Object} condition
 * @param {number} agent_id
 * @returns {Promise}
 */
function removeBatch(tableName, condition, agent_id) {
    db(tableName)
        .where(condition)
        .then((data) => {
            if (data.length > 0)
                log(tableName, "removed in batch", 0, agent_id, JSON.stringify(condition), "deleted")
            else { }
        })
    return db(tableName)
        .where(condition)
        .del()
        .then((response) => {
            process.env.NODE_ENV == 'development' ? console.log(response) : null;
            return response;
        })
        .catch((error) => {
            let err = errorHelper(error)

            process.env.NODE_ENV === 'development' ? console.log(err) : null;
            return err;
        })
};

/**
 * @param {string} tableName
 * @returns {Promise}
 */
function getAll(tableName) {
    return db(tableName)
        .then((response) => {
            process.env.NODE_ENV === 'development' ? console.log(response) : null;
            return response;
        })
        .catch((error) => {
            let err = errorHelper(error)
            process.env.NODE_ENV === 'development' ? console.log(err) : null;
            return err;
        })
}

/**
 * @param {string} tableName
 * @param {Object} condition
 * @returns {Promise}
 */
function getBy(tableName, condition) {
    return db(tableName)
        .where(condition)
        .then((response) => {
            process.env.NODE_ENV === 'development' ? console.log(response) : null;
            return response;
        })
        .catch((error) => {
            let err = errorHelper(error)
            process.env.NODE_ENV === 'development' ? console.log(err) : null;
            return err;
        })
}

/**
 * @param {string} tableName
 * @param {Object} condition
 * @returns {Promise}
 */
function getOrdered(tableName, param, limit = 5) {
    return db(tableName)
        .orderBy(param, order = "desc")
        .limit(limit)
        .then((response) => {
            process.env.NODE_ENV === 'development' ? console.log(response) : null;
            return response;
        })
        .catch((error) => {
            let err = errorHelper(error)
            process.env.NODE_ENV === 'development' ? console.log(err) : null;
            return err;
        })
}

module.exports = { insert, update, updateBatch, remove, removeBatch, getAll, getBy, getOrdered }