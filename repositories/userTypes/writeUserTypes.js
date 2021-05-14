const errorHelper = require("../../helpers/errorHelper")
const tables = require("../tables.json")

/**
 * @post /usertypes
 * @param {Object} db
 * @param {Object} data
 * @returns {Promise}
 */
function insertUserType(db,data) {
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

/**
 * @patch /usertypes/{type_id}
 * @param {Object} db
 * @param {Object} data
 * @returns {Promise}
 */
function updateUserType(db,id,data) {
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

module.exports = { insertUserType };