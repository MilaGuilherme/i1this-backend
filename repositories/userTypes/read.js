const tables = require("../../db/tables.json")
 const methods = require('../../helpers/methodsHelper');

/**
 * @get /usertypes
 * @returns {Object}
 */
function getUserTypes() {
  return methods.getAll(tables.userTypesTable).then((data) => {
            let response = data.length === 0 ? `No products found` : data
            return response
        }) 
}

/**
 * @get usertypes/{id}
 * @param {Number} id
 * @returns {Object}
 */
function getUserTypeByID(id) {
    const data = { "id": id }
  return methods.getBy(tables.userTypesTable, data).then((data) => {
            let response = data.length === 0 ? `No user type with the ID ${id} was found` : data
            return response
        }) 
}

/**
 * @get usertypes/{type_id}/users
 * @param {Number} type_id
 * @returns {Object}
 */
function getUserTypeUsers(type_id) {
    const data = { "type_id": type_id }
  return methods.getBy(tables.userTable, data).then((data) => {
            let response = data.length === 0 ? `No users of the type of ID ${type_id} were found` : data
            return response
        }) 
}

module.exports = { getUserTypes , getUserTypeByID , getUserTypeUsers };