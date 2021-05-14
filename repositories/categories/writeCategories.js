const errorHelper = require("../../helpers/errorHelper")
const tables = require("../tables.json")
//TODO removeCategory removeParent removeChild

/**
 * @post /categories
 * @param {Object} db
 * @param {Object} data
 * @returns {Promise}
 */
function insertCategory(db, data) {
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
 * @patch /categories/{category_id}
 * @param {Object} db
 * @param {number} id
 * @param {Object} data
 * @returns {Promise}
 */
function updateCategory(db, id, data) {
    db(tables.categoriesTable).where("id", id).update(data)
        .then((id) => {
            db(tables.categoriesTable).where("id", id)
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
 * @post /categories/{category_id}/child/{child_id}
 * @param {Object} db
 * @param {Object} data
 * @returns {Promise}
 */
function insertChild(db, data) {
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
 * @post /categories/{category_id}/parent/{parent_id}
 * @param {Object} db
 * @param {Object} data
 * @returns {Promise}
 */
function insertParent(db, data) {
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

module.exports = { insertCategory, updateCategory, insertChild, insertParent };