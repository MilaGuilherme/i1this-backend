const tables = require("../tables.json")
const methods = require('../methods');

/**
 * @get /usertypes
 * @returns {Object}
 */
function getUserTypes() {
    try {
        methods.getAll(tables.userTypesTable).then((data) => {
            let res = data.length === 0 ? `No products found` : data
            return res
        })
    }
    catch (err) {
        return err
    }
}

/**
 * @get usertypes/{id}
 * @param {Number} id
 * @returns {Object}
 */
function getUserTypeByID(id) {
    const data = { "id": id }
    try {
        methods.getBy(tables.userTypesTable, data).then((data) => {
            let res = data.length === 0 ? `No user type with the ID ${id} was found` : data
            return res
        })
    }
    catch (err) {
        return err
    }
}

/**
 * @get usertypes/{type_id}/users
 * @param {Number} type_id
 * @returns {Object}
 */
function getUserTypeUsers(type_id) {
    const data = { "type_id": type_id }
    try {
        methods.getBy(tables.userTable, data).then((data) => {
            let res = data.length === 0 ? `No users of the type of ID ${type_id} were found` : data
            return res
        })
    }
    catch (err) {
        return err
    }
}

module.exports = { getUserTypes , getUserTypeByID , getUserTypeUsers };