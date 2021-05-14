const db = require('../db/db')
const dotenv = require('dotenv');
const writelogs = require('./logs/writeLogs');
const log = writelogs.log;
const errorHelper = require("../helpers/errorHelper")
dotenv.config();
let agent_id = 0;

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
            db.destroy();
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
            log(tableName, "update", id, agent_id, JSON.stringify(res), JSON.stringify(data))
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
            db.destroy()
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
function remove(tableName, id) {
    db(tableName).where("id", id)
        .then((data) => {
            if (data.length > 0)
            log(tableName, "remove", id, agent_id, JSON.stringify(data),"deleted")
            else {
                db.destroy()
            }
        })
    return db(tableName).where("id", id).del()
        .then((data) => {
            let res = data === 0 ? `No data to delete` : `Deleted data`
            process.env.NODE_ENV == 'development' ? console.log(res) : null;
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            db.destroy()
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
        }).finally(() => db.destroy())
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
        }).finally(() => db.destroy())
}

module.exports = { insert, update, remove, getAll, getBy }