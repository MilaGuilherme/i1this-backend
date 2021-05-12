const errorHelper = require("../../helpers/errorHelper")
const tables = require("../tables.json")

/**
 * @get /products
 * @returns {Promise}
 */
function getProducts() {
    db(tables.productsTable)
        .then((data) => {
            let res = data.length === 0 ? `No products found` : data
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
 * @get products/{product_id}
 * @param {Number} id
 * @returns {Promise}
 */
function getProductByID(id) {
    db(tables.productsTable).where("id", id)
        .then((data) => {
            let res = data.length === 0 ? `No product registered with the ID ${id} was found` : data
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
 * @get products/{product_id}/onedby
 * @param {Number} product_id
 * @returns {Promise}
 */
function getProductOnes(product_id) {
    db(tables.onedTable).where("product_id", product_id)
        .then((data) => {
            let res = data.length === 0 ? `No users who +1 the product with the ID ${product_id} were found` : data
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
 * @get products/{product_id}/proposals
 * @param {Number} product_id
 * @returns {Promise}
 */
function getProductProposals(product_id) {
    db(tables.proposalsTable).where("product_id", product_id)
        .then((data) => {
            let res = data.length === 0 ? `No proposals for the product of ID ${product_id} were found` : data
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
 * @get products/{product_id}/categories
 * @param {Number} product_id
 * @returns {Promise}
 */
function getProductCategories(product_id) {
    db(tables.PrdInCatTable).where("product_id", product_id)
        .then((data) => {
            let res = data.length === 0 ? `The product of ID ${product_id} is not registered in any category` : data
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

module.exports = { getProducts , getProductByID , getProductOnes , getProductProposals , getProductCategories };