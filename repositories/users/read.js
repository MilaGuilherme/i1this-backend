const tables = require("../../db/tables.json")
const methods = require('../../helpers/methodsHelper');


/**
 * @get /users
 * @returns {Object}
 */
function getUsers() {
  return methods.getAll(tables.userTable).then((response) => {
    return response
  })
}

/**
 * @get users/{id}
 * @param {Number} id
 * @returns {Object}
 */
function getUserByID(id) {
  return methods.getBy(tables.userTable, { "id": id }).then((response) => {
    return response
  })
}

/**
 * @get users/{id}/products

 * @param {Number} created_by
 * @returns {Object}
 */
function getUserProduct(created_by) {
  return methods.getBy(tables.productsTable, { "created_by": created_by }).then((response) => {
    return response
  })
}


/**
 * @get users/{user_id}/ones
 * @param {Number} user_id
 * @returns {Object}
 */
function getUserOned(user_id) {
  return methods.getBy(tables.onedTable, { "user_id": user_id }).then((response) => {
    return response
  })
}

/**
 * @get users/{user_id}/categories
 * @param {Number} user_id
 * @returns {Object}
 */
function getUserWatched(user_id) {
  return methods.getBy(tables.watchedTable, { "user_id": user_id }).then((response) => {
    return response
  })
}

/**
 * @get users/{user_id}/accepted

 * @param {Number} user_id
 * @returns {Object}
 */
function getUserAccepted(user_id) {
  return methods.getBy(tables.acceptedTable, { "user_id": user_id }).then((response) => {
    return response
  })
}

/**
 * @get users/{user_id}/accepted

 * @param {Number} user_id
 * @returns {Object}
 */
function getUserProposed(user_id) {
  return methods.getBy(tables.proposalsTable, { "created_by": user_id }).then((response) => {
    return response
  })
}

module.exports = { getUsers, getUserByID, getUserProduct, getUserOned, getUserWatched, getUserAccepted,getUserProposed };