const { User, Product,Proposal,Category } = require("../../models")

/**
 * @get /products
 * @param {Object} filter
 * @returns {Object}
 */
 async function get(filter) {
  try {
    return await Product.findAll(filter);
  }
  catch (err) {
    return err;
  }
}

/**
 * @get products/{ProductId}/onedby
 * @param {Object} filter
 * @returns {Promise}
 */
async function getProductOnes(filter) {
  filter = {
    ...filter,
    include: [{
      model: User,
      as:'oned',
      where: { active: true },
      attributes: ['id', 'name', 'UserTypeId']
    }]
  }
  try {
    return await Product.findAll(filter);
  }
  catch (err) {
    return err;
  }
}


/**
 * @get products/{ProductId}/proposals
 * @param {Object} filter
 * @returns {Promise}
 */
async function getProductProposals(filter) {
  filter = {
    ...filter,
    include: [{
      model: Proposal,
      where: { active: true },
    }]
  }
  try {
    return await Product.findAll(filter);
  }
  catch (err) {
    return err;
  }
}

/**
 * @get products/{ProductId}/categories
 * @param {Object} filter
 * @returns {Promise}
 */
 async function getProductCategories(filter) {
  filter = {
    ...filter,
    include: [{
      model: Category,
      as:'categories'
    }]
  }
  try {
    return await Product.findAll(filter);
  }
  catch (err) {
    return err;
  }
}

module.exports = { get, getProductOnes, getProductProposals, getProductCategories };