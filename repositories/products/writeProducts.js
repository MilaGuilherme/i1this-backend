const tables = require("../tables.json")
const methods = require('../methods');

/**
 * @post /products
 * @param {number} agent_id
 * @param {Object} data
 * @returns {Object}
 */
function insertProduct(agent_id, data) {
    try {
        methods.insert(tables.productsTable, data, agent_id).then((res) => {
            return res
        })
    }
    catch (err) {
        return err
    }
}

/**
 * @patch /products/{id}
 * @param {number} agent_id
 * @param {number}  id
 * @param {Object}  data
 * @returns {Object}
 */
function updateProduct(agent_id, id, data) {
    try {
        methods.update(tables.productsTable, data, id, agent_id).then((res) => {
            return res
        })
    }
    catch (err) {
        return err
    }
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
    try {
        methods.insert(tables.PrdInCatTable, data, agent_id).then((res) => {
            return res
        })
    }
    catch (err) {
        return err
    }
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
    try {
        methods.update(tables.PrdInCatTable, data, product_id, agent_id).then((res) => {
            return res
        })
    }
    catch (err) {
        return err
    }
}

module.exports = { insertProduct, updateProduct, insertProductInCategory, removeProductFromCategory };