const { User, Product, Proposal, Category } = require("../../models")

/**
 * @get /products
 * @param {Object} filter
 * @returns {Object}
 */
async function get(filter) {
  if (typeof filter.where.id == 'string') {
    filter = {
      ...filter,
      include: [{
        model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
        required: true,
        through: { attributes: [] }
      }, {
        model: User,
        as: 'owner',
        attributes: ['id', 'name'],
        required: true,
      }, {
        model: Proposal,
        as: 'proposals',
        attributes: ['id', 'photos', 'link', 'price', 'minimunQty', 'requiresIntent', 'dueDate'],
      }
      ]
    }
  }
  else {
    filter = {
      ...filter,
      include: [{
        model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
        required: true,
        through: { attributes: [] }
      }]
    }
  }
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
      as: 'oned',
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
      as: 'categories'
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