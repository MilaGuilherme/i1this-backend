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
        .then((id) => {
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
 * @param {Object} data
 * @param {number} id
 * @param {number} agent_id
 * @returns {Promise}
 */
function update(tableName, id, data, agent_id) {
    console.log(data)
    console.log(id)
    db(tableName)
        .where("id", id)
        .then((response) => {
            if (response.length > 0)
                log(tableName, "update", id, agent_id, JSON.stringify(response), JSON.stringify(data))
            else { }
        })
    return db(tableName)
        .where("id", id)
        .update(data)
        .then((id) => {
            return db(tableName)
                .where("id", id)
                .then((response) => {
                    process.env.NODE_ENV === 'development' ? console.log(response) : null;
                    return { "status": 200, "message": response };
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
        .then(() => {
            return { "status": 202, "message": "Batch update accepted" };
        })
        .catch((error) => {
            let err = errorHelper(error)
            process.env.NODE_ENV === 'development' ? console.log(err) : null;
            return err;
        })
};

/**
 * @param {string} tableName
 * @param {number} id
 * @param {number} agent_id
 * @returns {Promise}
 */
function remove(tableName, id, agent_id) {
    db(tableName)
        .where("id", id)
        .then((response) => {
            if (response.length > 0)
                log(tableName, "remove", id, agent_id, JSON.stringify(data), "deleted")
            else { }
        })
    return db(tableName)
        .where("id", id)
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
        .then((data) => {
            let response = data === 0 ? `No data to delete` : `Deleted data`
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
 * @param {Object} data
 * @returns {Promise}
 */
function getBy(tableName, data) {
    return db(tableName)
        .where(data)
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

module.exports = { insert, update, updateBatch, remove, removeBatch, getAll, getBy }