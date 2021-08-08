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
 * @get products/{ProductId}/onedby
 * @param {Number} ProductId
 * @returns {Object}
 */
function getProductOnes(ProductId) {
  return methods.getBy(tables.onedTable, { "ProductId": ProductId }).then((response) => {
    return response
  })
}


/**
 * @get products/{ProductId}/proposals
 * @param {Number} ProductId
 * @returns {Object}
 */
function getProductProposals(ProductId) {
  return methods.getBy(tables.proposalsTable, { "ProductId": ProductId }).then((response) => {
    return response
  })
}

/**
 * @get products/{ProductId}/categories
 * @param {Number} ProductId
 * @returns {Object}
 */
function getProductCategories(ProductId) {
  return methods.getBy(tables.PrdInCatTable, { "ProductId": ProductId }).then((response) => {
    return response
  })
}

module.exports = { getProducts, getProductByID, getProductOnes, getProductProposals, getProductCategories };