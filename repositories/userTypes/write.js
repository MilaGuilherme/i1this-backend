const { UserType } = require("../../models")

/**
 * @post /usertypes
 * @param {Object} data
 * @param {number} agent_id
 * @returns {Object}
 */
async function insertUserType(data) {
  try {
    let res = await UserType.create(data);
    return res
  }
  catch (err) {
    return err;
  }
};

/**
 * @put /usertypes/{id}
 * @param {Object} data
 * @param {number} id
 * @param {number} agent_id
 */
function updateUserType(data, id, agent_id) {
  return methods.update(tables.userTypesTable, id, data, agent_id).then((response) => {
    return response
  })
};

module.exports = { insertUserType, updateUserType };