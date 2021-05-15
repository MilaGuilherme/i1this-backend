const tables = require("../tables.json")
const methods = require('../methods');

/**
 * @get /categories
 * @returns {Object} data
 */
function getCategories() {
    try {
        methods.getAll(tables.categoriesTable).then((res) => {
            let res = data.length === 0 ? `No categories found` : data
            return res
        })
    }
    catch (err) {
        return err
    }
}

/**
 * @get categories/{id}
 * @param {Number} id
 */
function getCategoryById(id) {
    const data = { "id": id }
    try {
        methods.getBy(tables.categoriesTable, data).then((data) => {
            let res = data.length === 0 ? `No categories found` : data
            return res
        })
    }
    catch (err) {
        return err
    }
}

/**
 * @get categories/{category_id}/products
 * @param {Number} category_id
 */
function getCategoryProducts(category_id) {
    const data = { "category_id": category_id }
    try {
        methods.getBy(tables.PrdInCatTable, data).then((data) => {
            let res = data.length === 0 ? `No products in the category of ID ${category_id} were found` : data
            return res
        })
    }
    catch (err) {
        return err
    }
}

/**
 * @get categories/{category_id}/watchers
 * @param {Number} category_id
 * @returns {Object} data
 */
function getCategoryWatchers(category_id) {
    const data = { "category_id": category_id }
    try {
        methods.getBy(tables.watchedTable, data).then((data) => {
            let res = data.length === 0 ? `No users watching in the category of ID ${category_id} were found` : data
            return res
        })
    }
    catch (err) {
        return err
    }
}

/**
 * @get categories/{category_id}/parents
 * @param {Number} child_id
 * @returns {Object} data
 */
function getCategoryParents(child_id) {
    const data = { "child_id": child_id }
    try {
        methods.getBy(tables.catParentsTable, data).then((data) => {
            let res = data.length === 0 ? `No parents to the category of ID ${child_id} were found` : data
            return res
        })
    }
    catch (err) {
        return err
    }
}

/**
 * @get categories/{category_id}/children
 * @param {Number} parent_id
 * @returns {Object} data
 */
function getCategoryChildren(parent_id) {
    const data = { "parent_id": parent_id }
    try {
        methods.getBy(tables.catParentsTable, data).then((data) => {
            let res = data.length === 0 ? `No children to the category of ID ${child_id} were found` : data
            return res
        })
    }
    catch (err) {
        return err
    }
}

module.exports = { getCategories, getCategoryById, getCategoryProducts, getCategoryWatchers, getCategoryParents, getCategoryChildren };