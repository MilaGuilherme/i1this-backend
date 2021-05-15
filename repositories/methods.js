const db = require('../db/db')
const dotenv = require('dotenv');
const writelogs = require('./logs/writeLogs');
const log = writelogs.log;
const errorHelper = require("../helpers/errorHelper")
dotenv.config();

/**
 * @param {string} tableName
 * @param {Object} data
 * @param {number} agent_id
 * @returns {Promise}
 */
function insert(tableName, data, agent_id) {
    return db(tableName).insert(data)
        .then((id) => {
            db(tableName).where("id", id)
                .then((res) => {
                    log(tableName, "insert", id[0], agent_id, "", JSON.stringify(res));
                    process.env.NODE_ENV === 'development' ? console.log(res) : null;
                    return res;
                })
        })
        .catch((error) => {
            let err = errorHelper(error);
            process.env.NODE_ENV === 'development' ? console.log(err) : null;
            ;
            return err;
        })
}

/**
 * @param {string} tableName
 * @param {Object} data
 * @param {number} id
 * @param {number} agent_id
 * @returns {Promise}
 */
function update(tableName, data, id, agent_id) {
    db(tableName).where("id", id)
        .then((res) => {
            if (res.length > 0)
                log(tableName, "update", id, agent_id, JSON.stringify(res), JSON.stringify(data))
            else { }
        })
    return db(tableName).where("id", id).update(data)
        .then((id) => {
            db(tableName).where("id", id)
                .then((res) => {
                    process.env.NODE_ENV === 'development' ? console.log(res) : null;
                    return res;
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
        .then((res) => {
            if (res.length > 0)
                log(tableName, "updated in batch", null, agent_id, JSON.stringify(res), JSON.stringify(data))
            else { }
        })
    return db(tableName).where(condition).update(data)
        .then((id) => {
            db(tableName).where(condition)
                .then((res) => {
                    process.env.NODE_ENV === 'development' ? console.log(res) : null;
                    return res;
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
 * @param {number} id
 * @param {number} agent_id
 * @returns {Promise}
 */
function remove(tableName, id, agent_id) {
    db(tableName).where("id", id)
        .then((res) => {
            if (res.length > 0)
                log(tableName, "remove", id, agent_id, JSON.stringify(data), "deleted")
            else { }
        })
    return db(tableName).where("id", id).del()
        .then((data) => {
            let res = data === 0 ? `No data to delete` : `Deleted data`
            process.env.NODE_ENV == 'development' ? console.log(res) : null;
            return res;
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
    db(tableName).where(condition)
        .then((data) => {
            if (data.length > 0)
                log(tableName, "removed in batch", 0, agent_id, JSON.stringify(condition), "deleted")
            else { }
        })
    return db(tableName).where(condition).del()
        .then((data) => {
            let res = data === 0 ? `No data to delete` : `Deleted data`
            process.env.NODE_ENV == 'development' ? console.log(res) : null;
            return res;
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
        .then((res) => {
            process.env.NODE_ENV === 'development' ? console.log(res) : null;
            return res;
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
    return db(tableName).where(data)
        .then((res) => {
            process.env.NODE_ENV === 'development' ? console.log(res) : null;
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            process.env.NODE_ENV === 'development' ? console.log(err) : null;
            return err;
        })
}

module.exports = { insert, update, updateBatch, remove, removeBatch, getAll, getBy }