const errorHelper = require("../../helpers/errorHelper")
const tables = require("../tables.json")

/**
 * @post proposals/
 * @param {Object} db
 * @param {Object} data
 * @returns {Promise}
 */
function insertProposal(db,data) {
    db(tables.proposalsTable).insert(data)
        .then((id) => {
            db(tables.proposalsTable).where("id", id)
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
module.exports = { insertProposal };