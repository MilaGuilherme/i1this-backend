const errorHelper = require("../../helpers/errorHelper")
const tables = require("../tables.json")

/**
 * @get /products
 * @returns {Promise}
 */
function getProducts() {
    try {
        methods.getAll(tables.productsTable).then((data) => {
            let res = data.length === 0 ? `No products found` : data
            return res
        })
    }
    catch (err) {
        return err
    }
}

/**
 * @get products/{id}
 * @param {Number} id
 * @returns {Promise}
 */
function getProductByID(id) {
    const data = { "id": id }
    try {
        methods.getBy(tables.productsTable, data).then((data) => {
            let res = data.length === 0 ? `No product registered with the ID ${id} was found` : data
            return res
        })
    }
    catch (err) {
        return err
    }
}

/**
 * @get products/{product_id}/onedby
 * @param {Object} db
 * @param {Number} product_id
 * @returns {Promise}
 */
function getProductOnes(db,product_id) {
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
 * @param {Object} db
 * @param {Number} product_id
 * @returns {Promise}
 */
function getProductProposals(db,product_id) {
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
 * @param {Object} db
 * @param {Number} product_id
 * @returns {Promise}
 */
function getProductCategories(db,product_id) {
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