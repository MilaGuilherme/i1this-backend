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
 * @get categories/{category_id}/products
 * @param {Number} category_id
 * @returns {Promise}
 */
function getCategoryProducts(category_id) {
    return methods.getBy(tables.PrdInCatTable, { "category_id": category_id }).then((response) => {
        return response
    })
}

/**
 * @get categories/{category_id}/watchers
 * @param {Number} category_id
 * @returns {Promise}
 */
function getCategoryWatchers(category_id) {
    return methods.getBy(tables.watchedTable, { "category_id": category_id }).then((response) => {
        return response
    })
}

/**
 * @get categories/{category_id}/parents
 * @param {Number} child_id
 * @returns {Promise}
 */
function getCategoryParents(child_id) {
    return methods.getBy(tables.catParentsTable, { "child_id": child_id }).then((response) => {
        return response
    })
}

/**
 * @get categories/{category_id}/children
 * @param {Number} parent_id
 * @returns {Promise}
 */
function getCategoryChildren(parent_id) {
    return methods.getBy(tables.catParentsTable, { "parent_id": parent_id }).then((response) => {
        return response
    })
}

module.exports = { getCategories, getCategoryById, getCategoryProducts, getCategoryWatchers, getCategoryParents, getCategoryChildren };