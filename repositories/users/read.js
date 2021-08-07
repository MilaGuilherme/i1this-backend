const { User } = require("../../models")


/**
 * @get /users
 * @returns {Object}
 */
 async function getAll() {
  try {
    return await User.find();
  }
  catch (err) {
    return err;
  }
}

/**
 * @get /users?filter
 * @param {Object} filter
 * @returns {Object}
 */
async function getBy(filter = null) {
  try {
    return await User.findAll(filter);
  }
  catch (err) {
    return err;
  }
}

/**
 * @get users/{id}/products

 * @param {Number} created_by
 * @returns {Object}
 */
async function getUserProduct(created_by) {
  return methods.getBy(table.productsTable, { "created_by": created_by }).then((response) => {
    return response
  })
}


/**
 * @get users/{user_id}/ones
 * @param {Number} user_id
 * @returns {Object}
 */
async function getUserOned(user_id) {
  return methods.getBy(table.onedTable, { "user_id": user_id }).then((response) => {
    return response
  })
}

/**
 * @get users/{user_id}/categories
 * @param {Number} user_id
 * @returns {Object}
 */
async function getUserWatched(user_id) {
  return methods.getBy(table.watchedTable, { "user_id": user_id }).then((response) => {
    return response
  })
}

/**
 * @get users/{user_id}/accepted

 * @param {Number} user_id
 * @returns {Object}
 */
async function getUserAccepted(user_id) {
  return methods.getBy(table.acceptedTable, { "user_id": user_id }).then((response) => {
    return response
  })
}

/**
 * @get users/{user_id}/accepted

 * @param {Number} user_id
 * @returns {Object}
 */
async function getUserProposed(user_id) {
  return methods.getBy(table.proposalsTable, { "created_by": user_id }).then((response) => {
    return response
  })
}

module.exports = { getAll, getBy, getUserProduct, getUserOned, getUserWatched, getUserAccepted, getUserProposed };