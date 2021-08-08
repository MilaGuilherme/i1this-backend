const methods = require('../../helpers/methodsHelper');

/**
 * @post /products
 * @param {Object} data
 * @param {number} agent_id
 * @returns {Object}
 */
function insertProduct(data,agent_id) {
    const CategoryId = data.CategoryId
    delete data.CategoryId
    return methods.insert(tables.productsTable, data, agent_id).then(response => {
        const ProductId = response[0].id
        insertProductInCategory({
            "ProductId": ProductId,
            "CategoryId": CategoryId
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
 * @post /products/{ProductId}/category/{CategoryId}
 * @param {number} agent_id
 * @param {Object} data
 * @returns {Object}
 */
function insertProductInCategory(data,agent_id) {
    return methods.insert(tables.PrdInCatTable, data, agent_id).then((response) => {
        return response
    })
}

/**
 * @delete /products/{ProductId}/category
 * @param {number} agent_id
 * @param {Object}  data
 * @returns {Object}
 */
function removeProductFromCategory(data,agent_id) {
    return methods.update(tables.PrdInCatTable, data, ProductId, agent_id).then((response) => {
        return response
    })
}

module.exports = { insertProduct, updateProduct, insertProductInCategory, removeProductFromCategory };