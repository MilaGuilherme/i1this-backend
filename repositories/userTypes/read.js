const tables = require("../../db/tables.json")
const methods = require('../../helpers/methodsHelper');

/**
 * @get /usertypes
 * @returns {Object}
 */
function getUserTypes() {
  return methods.getAll(tables.userTypesTable).then((response) => {
    return response
  })
}

/**
 * @get usertypes/{id}
 * @param {Number} id
 * @returns {Object}
 */
function getUserTypeByID(id) {
  return methods.getBy(tables.userTypesTable, { "id": id }).then((response) => {
    return response
  })
}

/**
 * @get usertypes/{type_id}/users
 * @param {Number} type_id
 * @returns {Object}
 */
function getUserTypeUsers(type_id) {
  return methods.getBy(tables.userTable, { "type_id": type_id }).then((response) => {
    return response
  })
}

module.exports = { getUserTypes, getUserTypeByID, getUserTypeUsers };