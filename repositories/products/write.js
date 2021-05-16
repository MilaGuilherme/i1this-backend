const tables = require("../../db/tables.json")
const methods = require('../../helpers/methodsHelper');

/**
 * @post /products
 * @param {number} agent_id
 * @param {Object} data
 * @returns {Object}
 */
function insertProduct(agent_id, data) {
  return methods.insert(tables.productsTable, data, agent_id).then((response) => {
            return response
        }) 
}

/**
 * @put /products/{id}
 * @param {number} agent_id
 * @param {number}  id
 * @param {Object}  data
 * @returns {Object}
 */
function updateProduct(agent_id, id, data) {
  return methods.update(tables.productsTable, data, id, agent_id).then((response) => {
            return response
        }) 
};


/**
 * @post /products/{product_id}/category/{category_id}
 * @param {number} agent_id
 * @param {number} product_id
 * @param {number} category_id
 * @returns {Object}
 */
function insertProductInCategory(agent_id, product_id, category_id) {
    let data = {
        "product_id": product_id,
        "category_id": category_id
    }
  return methods.insert(tables.PrdInCatTable, data, agent_id).then((response) => {
            return response
        }) 
}

/**
 * @delete /products/{product_id}/category
 * @param {number} agent_id
 * @param {number}  product_id
 * @returns {Object}
 */
function removeProductFromCategory(agent_id, product_id) {
    let data = {
        "product_id": product_id,
        "category_id": 0
    }
  return methods.update(tables.PrdInCatTable, data, product_id, agent_id).then((response) => {
            return response
        }) 
}

module.exports = { insertProduct, updateProduct, insertProductInCategory, removeProductFromCategory };