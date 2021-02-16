const db = require("../../db/connection");
const errorHelper = require("../../helpers/errorHelper")
const tables = require("../tables.json")

/**
 * @get /categories
 * @returns {Promise}
 */
function getCategories() {
    db(tables.categoriesTable)
        .then((data) => {
            let res = data.length === 0 ? `No categories found` : data
            db.destroy();
            console.log(res)
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            console.log(err);
            db.destroy();
            return err;
        })
}

/**
 * @get categories/{category_id}
 * @param {Number} id
 * @returns {Promise}
 */
function getCategoryById(id) {
    db(tables.categoriesTable).where("id", id)
        .then((data) => {
            let res = data.length === 0 ? `No category with the ID ${id} was found` : data
            console.log(res);
            db.destroy();
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            console.log(err);
            db.destroy();
            return err;
        })
}

/**
 * @get categories/{category_id}/products
 * @param {Number} category_id
 * @returns {Promise}
 */
function getCategoryProducts(category_id) {
    db(tables.PrdInCatTable).where("category_id", category_id)
        .then((data) => {
            let res = data.length === 0 ? `No products in the category of ID ${category_id} were found` : data
            console.log(res);
            db.destroy();
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            console.log(err);
            db.destroy();
            return err;
        })
}

/**
 * @get categories/{category_id}/watchers
 * @param {Number} category_id
 * @returns {Promise}
 */
function getCategoryWatchers(category_id) {
    db(tables.watchedTable).where("category_id", category_id)
        .then((data) => {
            let res = data.length === 0 ? `No users watching in the category of ID ${category_id} were found` : data
            console.log(res);
            db.destroy();
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            console.log(err);
            db.destroy();
            return err;
        })
}

/**
 * @get categories/{category_id}/parents
 * @param {Number} child_id
 * @returns {Promise}
 */
function getCategoryParents(child_id) {
    db(tables.catParentsTable).where("child_id", child_id)
        .then((data) => {
            let res = data.length === 0 ? `No categories parents of the category of ID ${child_id} were found` : data
            console.log(res);
            db.destroy();
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            console.log(err);
            db.destroy();
            return err;
        })
}

/**
 * @get categories/{category_id}/children
 * @param {Number} parent_id
 * @returns {Promise}
 */
function getCategoryChildren(parent_id) {
    db(tables.catParentsTable).where("parent_id", parent_id)
        .then((data) => {
            let res = data.length === 0 ? `No categories children of the category of ID ${parent_id} were found` : data
            console.log(res);
            db.destroy();
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            console.log(err);
            db.destroy();
            return err;
        })
}

module.exports = { getCategories , getCategoryById , getCategoryProducts , getCategoryWatchers , getCategoryParents, getCategoryChildren };