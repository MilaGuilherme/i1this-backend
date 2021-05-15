const tables = require("../../db/tables.json")
const methods = require('../../helpers/methodsHelper');

/**
 * @get /products
 * @returns {Object}
 */
function getProducts() {
  return methods.getAll(tables.productsTable).then((data) => {
            let response = data.length === 0 ? `No products found` : data
            return response
        }) 
}

/**
 * @get products/{id}
 * @param {Number} id
 * @returns {Object}
 */
function getProductByID(id) {
    const data = { "id": id }
  return methods.getBy(tables.productsTable, data).then((data) => {
            let response = data.length === 0 ? `No product registered with the ID ${id} was found` : data
            return response
        }) 
}

/**
 * @get products/{product_id}/onedby
 * @param {Number} product_id
 * @returns {Object}
 */
function getProductOnes(product_id) {
    const data = { "product_id": product_id }
  return methods.getBy(tables.onedTable, data).then((data) => {
            let response = data.length === 0 ? `No users who +1 the product with the ID ${product_id} were found` : data
            return response
        }) 
}


/**
 * @get products/{product_id}/proposals
 * @param {Number} product_id
 * @returns {Object}
 */
function getProductProposals(product_id) {
    const data = { "product_id": product_id }
  return methods.getBy(tables.proposalsTable, data).then((data) => {
            let response = data.length === 0 ? `No proposals for the product of ID ${product_id} were found` : data
            return response
        }) 
}

/**
 * @get products/{product_id}/categories
 * @param {Number} product_id
 * @returns {Object}
 */
function getProductCategories(product_id) {
    const data = { "product_id": product_id }
  return methods.getBy(tables.PrdInCatTable, data).then((data) => {
            let response = data.length === 0 ? `The product of ID ${product_id} is not registered in any category` : data
            return response
        }) 
}

module.exports = { getProducts , getProductByID , getProductOnes , getProductProposals , getProductCategories };