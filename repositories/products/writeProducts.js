const errorHelper = require("../../helpers/errorHelper")
const tables = require("../tables.json")

// const product = {
//     "name": "Test Item",
//     "created_by": "1",
//     "created_at": new Date(),
//     "price": "22.50",
//     "description": "A test item",
//     "photos":"http://"
// }

// const prodCategory = {
//     "product_id": "1",
//     "category_id": "1"
// }

/**
 * @post /products
 * @param {Object} data
 * @returns {Promise}
 */
function insertProduct(data) {
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
 * @param {Object} data
 * @returns {Promise}
 */
function insertProductInCategory(data) {
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