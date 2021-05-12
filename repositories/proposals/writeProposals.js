const errorHelper = require("../../helpers/errorHelper")
const tables = require("../tables.json")

/**
 * @post proposals/
 * @param {Object} data
 * @returns {Promise}
 */
function insertProposal(data) {
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

// const proposal = {
//     "product_id":"1",
//     "created_by":"1",
//     "created_at": new Date(),
//     "price" : 24.65,
//     "link":"http://",
//     "minimun_quantity" : "20",
//     "requires_intent" : false
// }

//insertProposal(proposal);

module.exports = { insertProposal };