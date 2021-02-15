const db = require("../../db/connection");
//const userHelper = require("../../helpers/userHelper")
const errorHelper = require("../../helpers/errorHelper")

const userTable = "users"
const productsTable = "products"
const plussedTable = "user_plussed_product"
const watchedTable = "user_watches_category"

/**
 * @route get: /users
 * @returns {Promise}
 */
function getUsers() {
    db(userTable)
        .then((data) => {
            let res = data.length === 0 ? `No users found` : data
            db.destroy();
            console.log(res)
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            db.destroy();
            console.log(err);
            return err;
        })
}

/**
 * @route get: users/:id/
 * @param {Number} id
 * @returns {Promise}
 */
function getUserByID(id) {
    db(userTable).where("id", id)
        .then((data) => {
            let res = data.length === 0 ? `No user registered with the ID ${id} were found` : data
            console.log(res);
            db.destroy();
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            db.destroy();
            console.log(err);
            return err;
        })
}

/**
 * @route get: users/:id/products
 * @param {Number} created_by
 * @returns {Promise}
 */
function getUserProducts(created_by) {
    db(productsTable).where("created_by", created_by)
        .then((data) => {
            let res = data.length === 0 ? `No products registered by the user of ID ${created_by} were found` : data
            console.log(res);
            db.destroy();
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            db.destroy();
            console.log(err);
            return err;
        })
}


/**
 * @route get: users/:id/plus
 * @param {Number} user_id
 * @returns {Promise}
 */
function getUserPlusseds(user_id) {
    db(plussedTable).where("user_id", user_id)
        .then((data) => {
            let res = data.length === 0 ? `No products +1 by the user of ID ${user_id} were found` : data
            console.log(res);
            db.destroy();
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            db.destroy();
            console.log(err);
            return err;
        })
}

/**
 * @route get: users/:id/categories
 * @param {Number} user_id
 * @returns {Promise}
 */
function getUserWatched(user_id) {
    db(watchedTable).where("user_id", user_id)
        .then((data) => {
            let res = data.length === 0 ? `No categories watched by the user of ID ${user_id} were found` : data
            console.log(res);
            db.destroy();
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            db.destroy();
            console.log(err);
            return err;
        })
}

module.exports = { getUsers , getUserByID , getUserProducts , getUserPlusseds , getUserWatched};