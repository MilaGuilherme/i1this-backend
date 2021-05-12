const errorHelper = require("../../helpers/errorHelper")
const tables = require("../tables.json")

/**
 * @get /usertypes
 * @param {Object} db
 * @returns {Promise}
 */
function getUserTypes(db) {
    db(tables.userTypesTable)
        .then((data) => {
            let res = data.length === 0 ? `No users types found` : data
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
 * @get usertypes/{id}
 * @param {Object} db
 * @param {Number} id
 * @returns {Promise}
 */
function getUserTypeByID(db,id) {
    db(tables.userTable).where("id", id)
        .then((data) => {
            let res = data.length === 0 ? `No user type with the ID ${id} was found` : data
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
 * @get usertypes/{type_id}/users
 * @param {Object} db
 * @param {Number} created_by
 * @returns {Promise}
 */
function getUserTypeUsers(db,type_id) {
    db(tables.userTable).where("type_id", type_id)
        .then((data) => {
            let res = data.length === 0 ? `No users of the type of ID ${type_id} were found` : data
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
module.exports = { getUserTypes , getUserTypeByID , getUserTypeUsers };