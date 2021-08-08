const methods = require('../../helpers/methodsHelper');

/**
 * @get /categories
 * @returns {Promise}
 */
function getCategories() {
    return methods.getAll(tables.categoriesTable).then((response) => {
        return response
    })
}

/**
 * @get categories/{id}
 * @param {Number} id
 * @returns {Promise}
 */
function getCategoryById(id) {
    return methods.getBy(tables.categoriesTable, { id }).then((response) => {
        return response
    })
}

/**
 * @get categories/{CategoryId}/products
 * @param {Number} CategoryId
 * @returns {Promise}
 */
function getCategoryProducts(CategoryId) {
    return methods.getBy(tables.PrdInCatTable, { "CategoryId": CategoryId }).then((response) => {
        return response
    })
}

/**
 * @get categories/{CategoryId}/watchers
 * @param {Number} CategoryId
 * @returns {Promise}
 */
function getCategoryWatchers(CategoryId) {
    return methods.getBy(tables.watchedTable, { "CategoryId": CategoryId }).then((response) => {
        return response
    })
}

/**
 * @get categories/{CategoryId}/parents
 * @param {Number} child_id
 * @returns {Promise}
 */
function getCategoryParents(child_id) {
    return methods.getBy(tables.catParentsTable, { "child_id": child_id }).then((response) => {
        return response
    })
}

/**
 * @get categories/{CategoryId}/children
 * @param {Number} parent_id
 * @returns {Promise}
 */
function getCategoryChildren(parent_id) {
    return methods.getBy(tables.catParentsTable, { "parent_id": parent_id }).then((response) => {
        return response
    })
}

module.exports = { getCategories, getCategoryById, getCategoryProducts, getCategoryWatchers, getCategoryParents, getCategoryChildren };