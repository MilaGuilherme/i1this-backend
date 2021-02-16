const db = require("../../db/connection");
const errorHelper = require("../../helpers/errorHelper")
const tables = require("../tables.json")

/**
 * @post /usertypes
 * @param {Object} data
 * @returns {Promise}
 */
function insertUserType(data) {
    db(tables.userTypesTable).insert(data)
        .then((id) => {
            db(tables.userTypesTable).where("id", id)
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

// const type = {
//     "name": "Admin",
// }

// insertUserType(type)

module.exports = { insertUserType };