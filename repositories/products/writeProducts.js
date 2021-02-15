const db = require("../../db/connection");
const errorHelper = require("../../helpers/errorHelper")

const productsTable = "products"

const data = {
    "name": "Camila",
    "email": "mila@gmail.com",
    "type_id": "1",
    "created_at": new Date(),
    "active":true
}

/**
 * @route post: /products
 * @param {Object} data
 * @returns {Promise}
 */
function insertProduct(data) {
    db(productsTable).insert(data)
        .then((data) => {
            db(userTable).where("id", data)
                .then((data) => {
                    let res = userHelper.allUsers(data);
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

insertProduct(data);

module.exports = { insertProduct };