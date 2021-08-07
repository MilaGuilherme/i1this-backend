const methods = require('../../helpers/methodsHelper');

/**
 * @post /products
 * @param {Object} data
 * @param {number} agent_id
 * @returns {Object}
 */
function insertProduct(data,agent_id) {
    const category_id = data.category_id
    delete data.category_id
    return methods.insert(tables.productsTable, data, agent_id).then(response => {
        const product_id = response[0].id
        insertProductInCategory({
            "product_id": product_id,
            "category_id": category_id
        },agent_id)
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
function updateProduct(id, data, agent_id) {
    return methods.update(tables.productsTable, id, data, agent_id).then((response) => {
        return response
    })
};


/**
 * @post /products/{product_id}/category/{category_id}
 * @param {number} agent_id
 * @param {Object} data
 * @returns {Object}
 */
function insertProductInCategory(data,agent_id) {
    console.log(data)
    return methods.insert(tables.PrdInCatTable, data, agent_id).then((response) => {
        return response
    })
}

/**
 * @delete /products/{product_id}/category
 * @param {number} agent_id
 * @param {Object}  data
 * @returns {Object}
 */
function removeProductFromCategory(data,agent_id) {
    return methods.update(tables.PrdInCatTable, data, product_id, agent_id).then((response) => {
        return response
    })
}

module.exports = { insertProduct, updateProduct, insertProductInCategory, removeProductFromCategory };