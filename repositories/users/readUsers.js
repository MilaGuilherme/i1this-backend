const errorHelper = require("../../helpers/errorHelper")
const tables = require("../tables.json")

/**
 * @get /users
 * @param {Object} db
 * @returns {Promise}
 */
function getUsers(db) {
    db(tables.userTable)
        .then((data) => {
            let res = data.length === 0 ? `No users found` : data
            db.destroy();
            console.log(res)
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            console.log(err);
            db.destroy();
            return err;
        })
}

/**
 * @get users/{user_id}
 * @param {Object} db
 * @param {Number} id
 * @returns {Promise}
 */
function getUserByID(db,id) {
    db(tables.userTable).where("id", id)
        .then((data) => {
            let res = data.length === 0 ? `No user registered with the ID ${id} were found` : data
            console.log(res);
            db.destroy();
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            console.log(err);
            db.destroy();
            return err;
        })
}

/**
 * @get users/{user_id}/products
 * @param {Object} db
 * @param {Number} created_by
 * @returns {Promise}
 */
function getUserProduct(db,created_by) {
    db(tables.productsTable).where("created_by", created_by)
        .then((data) => {
            let res = data.length === 0 ? `No products registered by the user of ID ${created_by} were found` : data
            console.log(res);
            db.destroy();
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            console.log(err);
            db.destroy();
            return err;
        })
}


/**
 * @get users/{user_id}/ones
 * @param {Object} db
 * @param {Number} user_id
 * @returns {Promise}
 */
function getUserOned(db,user_id) {
    db(tables.onedTable).where("user_id", user_id)
        .then((data) => {
            let res = data.length === 0 ? `No products +1 by the user of ID ${user_id} were found` : data
            console.log(res);
            db.destroy();
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            console.log(err);
            db.destroy();
            return err;
        })
}

/**
 * @get users/{user_id}/categories
 * @param {Object} db
 * @param {Number} user_id
 * @returns {Promise}
 */
function getUserWatched(db,user_id) {
    db(tables.watchedTable).where("user_id", user_id)
        .then((data) => {
            let res = data.length === 0 ? `No categories watched by the user of ID ${user_id} were found` : data
            console.log(res);
            db.destroy();
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            console.log(err);
            db.destroy();
            return err;
        })
}
/**
 * @get users/{user_id}/accepted
 * @param {Object} db
 * @param {Number} user_id
 * @returns {Promise}
 */
function getUserAccepted(db,user_id) {
    db(tables.acceptedTable).where("user_id", user_id)
        .then((data) => {
            let res = data.length === 0 ? `No proposals accepted by the user of ID ${user_id} were found` : data
            console.log(res);
            db.destroy();
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            console.log(err);
            db.destroy();
            return err;
        })
}

module.exports = { getUsers , getUserByID , getUserProduct , getUserOned, getUserWatched, getUserAccepted };