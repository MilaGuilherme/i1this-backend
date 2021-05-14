const errorHelper = require("../../helpers/errorHelper")
const tables = require("../tables.json")

db = require('../../db/db');


/**
 * @post /users
 * @param {Object} db
 * @param {Object} data
 * @returns {Promise}
 */
function insertUser(db, data) {
    db(tables.userTable).insert(data)
        .then((id) => {
            db(tables.userTable).where("id", id)
                .then((data) => {
                    let res = data.length === 0 ? `No data` : data
                    db.destroy();
                    console.log(res)
                    return res;
                })
        })
        .catch((error) => {
            let err = errorHelper(error)
            db.destroy();
            console.log(err);
            return err;
        })
};

/**
 * @put /users/{user_id}
 * @param {Object} db
 * @param {Object} data
 * @returns {Promise}
 */

function updateUser(db, id, data) {
    db(tables.userTable).where("id", id).update(data)
        .then((id) => {
            db(tables.userTable).where("id", id)
                .then((data) => {
                    let res = data.length === 0 ? `No data` : data
                    db.destroy();
                    console.log(res)
                    return res;
                })
        })
        .catch((error) => {
            let err = errorHelper(error)
            db.destroy();
            console.log(err);
            return err;
        })
};


/**
 * @post /users/{user_id}/one/{product_id}
 * @param {Object} db
 * @param {Object} data
 * @returns {Promise}
 */
function insertOne(db, data) {
    db(tables.onedTable).insert(data)
        .then((id) => {
            db(tables.onedTable).where("id", id)
                .then((data) => {
                    let res = data.length === 0 ? `No data` : data
                    db.destroy();
                    console.log(res)
                    return res;
                })
        })
        .catch((error) => {
            let err = errorHelper(error)
            db.destroy();
            console.log(err);
            return err;
        })
};

/**
* @post /users/{user_id}/category/{category_id}
* @param {Object} db
* @param {Object} data
* @returns {Promise}
*/
function insertWatch(db, data) {
    db(tables.watchedTable).insert(data)
        .then((id) => {
            db(tables.watchedTable).where("id", id)
                .then((data) => {
                    let res = data.length === 0 ? `No data` : data
                    db.destroy();
                    console.log(res)
                    return res;
                })
        })
        .catch((error) => {
            let err = errorHelper(error)
            db.destroy();
            console.log(err);
            return err;
        })
};

/**
 * @post /users/{user_id}/proposals/{proposal_id}
 * @param {Object} db
 * @param {Object} data
 * @returns {Promise}
 */
function insertAccept(db, data) {
    db(tables.acceptedTable).insert(data)
        .then((id) => {
            db(tables.acceptedTable).where("id", id)
                .then((data) => {
                    let res = data.length === 0 ? `No data` : data
                    db.destroy();
                    console.log(res)
                    return res;
                })
        })
        .catch((error) => {
            let err = errorHelper(error)
            db.destroy();
            console.log(err);
            return err;
        })
};

module.exports = { insertUser, insertOne, insertWatch, insertAccept, updateUser };