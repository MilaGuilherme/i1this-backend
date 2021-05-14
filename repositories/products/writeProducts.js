const errorHelper = require("../../helpers/errorHelper")
const tables = require("../tables.json")

/**
 * @post /products
 * @param {Object} db
 * @param {Object} data
 * @returns {Promise}
 */
function insertProduct(db,data) {
    db(tables.productsTable).insert(data)
        .then((id) => {
            db(tables.productsTable).where("id", id)
                .then((data) => {
                    let res = data.length === 0 ? `No data` : data
                    console.log(res)
                    db.destroy();
                    return res;
                })
        })
        .catch((error) => {
            let err = errorHelper(error);
            console.log(err);
            db.destroy();
            return err;
        })
}

/**
 * @patch /products/{product_id}
 * @param {Object}  db
 * @param {number}  id
 * @param {Object}  data
 * @returns {Promise} Promise
 */
 function updateProduct(db, id, data) {
    db(tables.productsTable).where("id", id).update(data)
        .then((id) => {
            db(tables.productsTable).where("id", id)
                .then((data) => {
                    let res = data.length === 0 ? `No data` : data
                    db.destroy();
                    console.log(res)
                    return res;
                })
        })
        .catch((error) => {
            let err = errorHelper(error)
            db.destroy();
            console.log(err);
            return err;
        })
};


/**
 * @post /products/{product_id}/category/{category_id}
 * @param {Object} db
 * @param {Object} data
 * @returns {Promise}
 */
function insertProductInCategory(db,data) {
    db(tables.PrdInCatTable).insert(data)
        .then((id) => {
            db(tables.PrdInCatTable).where("id", id)
                .then((data) => {
                    let res = data.length === 0 ? `No data` : data
                    console.log(res)
                    db.destroy();
                    return res;
                })
        })
        .catch((error) => {
            let err = errorHelper(error);
            console.log(err);
            db.destroy();
            return err;
        })
}

/**
 * @patch /products/{product_id}/category/{category_id}
 * @param {Object} db
 * @param {number}  id
 * @returns {Promise}
 */
function removeProductFromCategory(db,id) {
    db(tables.PrdInCatTable).where("product_id", id).update("category_id",0)
        .then((id) => {
            db(tables.PrdInCatTable).where("id", id)
                .then((data) => {
                    let res = data.length === 0 ? `No data` : data
                    db.destroy();
                    console.log(res)
                    return res;
                })
        })
        .catch((error) => {
            let err = errorHelper(error)
            db.destroy();
            console.log(err);
            return err;
        })
}
// db = require("../../db/db")
// removeProductFromCategory(db,1)

module.exports = { insertProduct , updateProduct , insertProductInCategory , removeProductFromCategory };