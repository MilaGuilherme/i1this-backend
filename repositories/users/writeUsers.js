const db = require("../../db/connection");
const errorHelper = require("../../helpers/errorHelper")
const tables = require("../tables.json")


// const user = {
//     "name": "Camila",
//     "email": "camila@gmail.com",
//     "type_id": "1",
//     "created_at": new Date(),
//     "active":true
// }

// const oned = {
//     "product_id": 1,
//     "user_id": 1,
//     "notification": true,
//     "oned_at": new Date(),
// }

// const watched = {
//     "category_id": 1,
//     "user_id": 1
// }

// const accepted = {
//     "proposal_id": 1,
//     "user_id": 1,
// }

/**
 * @post /users
 * @param {Object} data
 * @returns {Promise}
 */
function insertUser(data) {
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
 * @post /users/{user_id}/one/{product_id}
 * @param {Object} data
 * @returns {Promise}
 */
function insertOne(data) {
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
 * @param {Object} data
 * @returns {Promise}
 */
function insertWatch(data) {
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
 * @param {Object} data
 * @returns {Promise}
 */
function insertAccept(data) {
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

module.exports = { insertUser, insertOne, insertWatch, insertAccept };