const tables = require("../../db/tables.json")
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
    const data = { "id": id }
    return methods.getBy(tables.categoriesTable, data).then((response) => {
        return response
    })
}

/**
 * @get categories/{category_id}/products
 * @param {Number} category_id
 * @returns {Promise}
 */
function getCategoryProducts(category_id) {
    const data = { "category_id": category_id }
    return methods.getBy(tables.PrdInCatTable, data).then((response) => {
        return response
    })
}

/**
 * @get categories/{category_id}/watchers
 * @param {Number} category_id
 * @returns {Promise}
 */
function getCategoryWatchers(category_id) {
    const data = { "category_id": category_id }
    return methods.getBy(tables.watchedTable, data).then((response) => {
        return response
    })
}

/**
 * @get categories/{category_id}/parents
 * @param {Number} child_id
 * @returns {Promise}
 */
function getCategoryParents(child_id) {
    const data = { "child_id": child_id }
    return methods.getBy(tables.catParentsTable, data).then((response) => {
        return response
    })
}

/**
 * @get categories/{category_id}/children
 * @param {Number} parent_id
 * @returns {Promise}
 */
function getCategoryChildren(parent_id) {
    const data = { "parent_id": parent_id }
    return methods.getBy(tables.catParentsTable, data).then((response) => {
        return response
    })
}

module.exports = { getCategories, getCategoryById, getCategoryProducts, getCategoryWatchers, getCategoryParents, getCategoryChildren };