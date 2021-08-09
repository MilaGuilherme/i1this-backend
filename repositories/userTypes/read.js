const { UserType , User } = require("../../models")

/**
 * @returns {Object}
 */
 async function get(filter) {
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
     ...filter,
     include: [{
      model: User,
      where: { active: true },
      attributes: ['id', 'name', 'UserTypeId']
    }]
   }
  try {
    return await UserType.findAll(filter);
  }
  catch (err) {
    return err;
  }
}

module.exports = { get, getUsers};