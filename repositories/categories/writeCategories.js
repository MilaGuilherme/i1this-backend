const errorHelper = require("../../helpers/errorHelper")
const tables = require("../tables.json")

/**
 * @post /category
 * @param {Object} db
 * @param {Object} data
 * @returns {Promise}
 */
function insertCategory(db,data) {
    db(tables.categoriesTable).insert(data)
        .then((id) => {
            db(tables.categoriesTable).where("id", id)
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
 * @post /category/{category_id}/child/{child_id}
 * @param {Object} db
 * @param {Object} data
 * @returns {Promise}
 */
function insertChild(db,data) {
    db(tables.catParentsTable).insert(data)
        .then((id) => {
            db(tables.catParentsTable).where("id", id)
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
 * @post /category/{category_id}/parent/{parent_id}
 * @param {Object} db
 * @param {Object} data
 * @returns {Promise}
 */
function insertParent(db,data) {
    db(tables.catParentsTable).insert(data)
        .then((id) => {
            db(tables.catParentsTable).where("id", id)
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

module.exports = { insertCategory , insertChild , insertParent };