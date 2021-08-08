const { UserType } = require("../../models")

/**
 * @post /usertypes
 * @param {Object} data
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
 */
async function updateUserType(data) {
  try {
    let res = await UserType.update(
      {
        ...data
      },{
      where:{
        id:data.id
      }
    })
    return res
  }
  catch (err) {
    return err;
  }
};

module.exports = { insertUserType, updateUserType };