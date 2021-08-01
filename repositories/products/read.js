const tables = require("../../db/tables.json")
const methods = require('../../helpers/methodsHelper');

/**
 * @get /products
 * @returns {Object}
 */
function getProducts(params = null) {
  if (Object.keys(params) == 0) {
    return methods.getAll(tables.productsTable).then((response) => {
      return response
    })
  }
  else if (params.orderBy) {
    return methods.getOrdered(tables.productsTable, params.orderBy).then((response) => {
      return response
    })
  }
}

/**
 * @get products/{id}
 * @param {Number} id
 * @returns {Object}
 */
function getProductByID(id) {
  return methods.getBy(tables.productsTable, { "id": id }).then((response) => {
    return response
  })
}

/**
 * @get products/{product_id}/onedby
 * @param {Number} product_id
 * @returns {Object}
 */
function getProductOnes(product_id) {
  return methods.getBy(tables.onedTable, { "product_id": product_id }).then((response) => {
    return response
  })
}


/**
 * @get products/{product_id}/proposals
 * @param {Number} product_id
 * @returns {Object}
 */
function getProductProposals(product_id) {
  return methods.getBy(tables.proposalsTable, { "product_id": product_id }).then((response) => {
    return response
  })
}

/**
 * @get products/{product_id}/categories
 * @param {Number} product_id
 * @returns {Object}
 */
function getProductCategories(product_id) {
  return methods.getBy(tables.PrdInCatTable, { "product_id": product_id }).then((response) => {
    return response
  })
}

module.exports = { getProducts, getProductByID, getProductOnes, getProductProposals, getProductCategories };