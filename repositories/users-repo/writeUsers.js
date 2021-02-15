const db = require("../../db/connection");
const userHelper = require("../../helpers/userHelper")
const errorHelper = require("../../helpers/errorHelper")

const userTable = "users"
const productsTable = "products"
const plussedTable = "user_plussed_product"
const watchedTable = "user_watches_category"

// const data = {
//     "name": "Camila",
//     "email": "camila@gmail.com",
//     "type_id": "1",
//     "created_at": new Date(),
//     "active":true
// }

// const data = {
//     "product_id": 1,
//     "user_id": 1,
//     "notification": true,
//     "plussed_at": new Date(),
// }

const data = {
    "category_id": 1,
    "user_id": 1
}

/**
 * @route post: /users
 * @param {Object} data
 * @returns {Promise}
 */
function insertUser(data) {
    db(userTable).insert(data)
        .then((data) => {
            db(userTable).where("id", data)
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
}

/**
 * @route post: /users/:id/plus/:id
 * @param {Object} data
 * @returns {Promise}
 */
function userPlus(data) {
    db(plussedTable).insert(data)
        .then((data) => {
            db(plussedTable).where("id", data)
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
}

/**
 * @route post: /users/:id/category/:id
 * @param {Object} data
 * @returns {Promise}
 */
function userWatch(data) {
    db(watchedTable).insert(data)
        .then((data) => {
            db(watchedTable).where("id", data)
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
}

userWatch(data);

module.exports = { insertUser };