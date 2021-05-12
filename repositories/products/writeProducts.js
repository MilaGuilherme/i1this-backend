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

module.exports = { insertProduct , insertProductInCategory };