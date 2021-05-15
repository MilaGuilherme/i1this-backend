const tables = require("../tables.json")
const methods = require('../methods');


/**
 * @get /users
 * @returns {Object}
 */
function getUsers() {
  return methods.getAll(tables.userTable).then((data) => {
            let response = data.length === 0 ? `No products found` : data
            return response
        }) 
}

/**
 * @get users/{id}
 * @param {Number} id
 * @returns {Object}
 */
function getUserByID(id) {
    const data = { "id": id }
  return methods.getBy(tables.userTable, data).then((data) => {
            let response = data.length === 0 ? `No user registered with the ID ${id} were found` : data
            return response
        }) 
}

/**
 * @get users/{id}/products

 * @param {Number} created_by
 * @returns {Object}
 */
function getUserProduct(created_by) {
    const data = { "created_by": created_by }
  return methods.getBy(tables.productsTable, data).then((data) => {
            let response = data.length === 0 ? `No products registered by the user of ID ${created_by} were found` : data
            return response
        }) 
}


/**
 * @get users/{user_id}/ones
 * @param {Number} user_id
 * @returns {Object}
 */
function getUserOned(user_id) {
    const data = { "user_id": user_id }
  return methods.getBy(tables.onedTable, data).then((data) => {
            let response = data.length === 0 ? `No products +1 by the user of ID ${user_id} were found` : data
            return response
        }) 
}

/**
 * @get users/{user_id}/categories
 * @param {Number} user_id
 * @returns {Object}
 */
function getUserWatched(user_id) {
    const data = { "user_id": user_id }
  return methods.getBy(tables.watchedTable, data).then((data) => {
            let response = data.length === 0 ? `No categories watched by the user of ID ${user_id} were found` : data
            return response
        }) 
}
/**
 * @get users/{user_id}/accepted

 * @param {Number} user_id
 * @returns {Object}
 */
function getUserAccepted(db,user_id) {
    const data = { "user_id": user_id }
  return methods.getBy(tables.acceptedTable, data).then((data) => {
            let response = data.length === 0 ? `No proposals accepted by the user of ID ${user_id} were found` : data
            return response
        }) 
}

module.exports = { getUsers , getUserByID , getUserProduct , getUserOned, getUserWatched, getUserAccepted };