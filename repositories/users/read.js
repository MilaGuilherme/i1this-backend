const { User, Product,Proposal,Category } = require("../../models")
const { Op } = require("sequelize");


/**
 * @get /login
 * @returns {Object}
 */
async function login(filter) {
  try {
    return await User.findAll(filter);
  }
  catch (err) {
    return err;
  }
}

/**
 * @get /users
 * @param {Object} filter
 * @returns {Object}
 */
async function get(filter) {
  try {
    return await User.findAll(filter);
  }
  catch (err) {
    return err;
  }
}

/**
 * @get users/{id}/products

 * @param {Object} filter
 * @returns {Object}
 */
async function getUserProduct(filter = null) {
  filter = {
    ...filter,
    include: [{
      model: Product,
      where: { active: true },
      attributes: ['id', 'name', 'price', 'description']
    }]
  }
  try {
    return await User.findAll(filter);
  }
  catch (err) {
    return err;
  }
}

/**
 * @get users/{id}/products
 * @param {Object} filter
 * @returns {Object}
 */
async function getUserOned(filter = null) {
  filter = {
    ...filter,
    include: [{
      model: Product,
      as: 'oned',
      where: { id:{[Op.not]:null} },
      attributes: ['id', 'name', 'price', 'description']
    }]
  }
  try {
    return await User.findAll(filter);
  }
  catch (err) {
    return err;
  }
}

/**
 * @get users/{UserId}/accepted
 * @param {Object} filter
 * @returns {Object}
 */
async function getUserAccepted(filter) {
  filter = {
    ...filter,
    include: [{
      model: Proposal,
      as: 'accepted',
      where: { id:{[Op.not]:null} },
      attributes: ['id', 'photos', 'links', 'price','minimunQty','requiresIntent','productId']
    }]
  }
  try {
    return await User.findAll(filter);
  }
  catch (err) {
    return err;
  }
}

/**
 * @get users/{UserId}/created
 * @param {Object} filter
 * @returns {Object}
 */
async function getUserProposed(filter) {
  filter = {
    ...filter,
    include: [{
      model: Proposal,
      where: { id:{[Op.not]:null} },
      attributes: ['id', 'photos', 'links', 'price','minimunQty','requiresIntent','productId']
    }]
  }
  try {
    return await User.findAll(filter);
  }
  catch (err) {
    return err;
  }
}

/**
 * @get users/{UserId}/categories
 * @param {Object} filter
 * @returns {Object}
 */
 async function getUserWatched(filter) {
  filter = {
    ...filter,
    include: [{
      model: Category,
      as: 'category',
      where: { id:{[Op.not]:null} },
    }]
  }
  try {
    return await User.findAll(filter);
  }
  catch (err) {
    return err;
  }
}

module.exports = { login, get, getUserProduct, getUserOned, getUserWatched, getUserAccepted, getUserProposed };