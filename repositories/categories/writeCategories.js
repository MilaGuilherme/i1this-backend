const errorHelper = require("../../helpers/errorHelper")
const tables = require("../tables.json")

const category = {
    "name": "Test",
}

const child = {
    "child_id": "1",
    "parent_id": "1"
}

const parent = {
    "parent_id": "1",
    "child_id": "1"
}

/**
 * @post /category
 * @param {Object} data
 * @returns {Promise}
 */
function insertCategory(data) {
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
 * @param {Object} data
 * @returns {Promise}
 */
function insertChild(data) {
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
 * @param {Object} data
 * @returns {Promise}
 */
function insertParent(data) {
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

//insertCategory(category);
//insertChild(child);
//insertParent(parent);
module.exports = { insertCategory , insertChild , insertParent };