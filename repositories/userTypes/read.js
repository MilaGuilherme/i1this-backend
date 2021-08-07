const { UserType , User } = require("../../models")

/**
 * @returns {Object}
 */
async function get() {
  try {
    return await UserType.findAll()
  }
  catch (err) {
    return err;
  }
}

/**
 * @param {Object} filter
 * @returns {Object}
 */
 async function getBy(filter = null) {
  try {
    return await UserType.findAll(filter);
  }
  catch (err) {
    return err;
  }
}

/**
 * @param {Object} filter
 * @returns {Object}
 */
 async function getUsers(filter = null) {
   filter = {
     include : [User]
   }
  try {
    return await UserType.findAll(filter);
  }
  catch (err) {
    return err;
  }
}

module.exports = { get, getBy, getUsers};