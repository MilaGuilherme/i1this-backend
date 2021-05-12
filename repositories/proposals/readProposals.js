const errorHelper = require("../../helpers/errorHelper")
const tables = require("../tables.json")

/**
 * @get proposals/
 * @returns {Promise}
 */
function getProposals() {
    db(tables.proposalsTable)
        .then((data) => {
            let res = data.length === 0 ? `No proposals found` : data
            db.destroy();
            console.log(res)
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            console.log(err);
            db.destroy();
            return err;
        })
}

/**
 * @get proposals/{category_id}
 * @param {Number} id
 * @returns {Promise}
 */
function getProposalsByID(id) {
    db(tables.proposalsTable).where("id", id)
        .then((data) => {
            let res = data.length === 0 ? `No proposal with the ID ${id} was found` : data
            console.log(res);
            db.destroy();
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            console.log(err);
            db.destroy();
            return err;
        })
}

/**
 * @get proposals/{proposal_id}/users
 * @param {Number} proposal_id
 * @returns {Promise}
 */
function getProposalUsers(proposal_id) {
    db(tables.acceptedTable).where("proposal_id", proposal_id)
        .then((data) => {
            let res = data.length === 0 ? `No users who accepted the proposal of ID ${proposal_id} were found` : data
            console.log(res);
            db.destroy();
            return res;
        })
        .catch((error) => {
            let err = errorHelper(error)
            console.log(err);
            db.destroy();
            return err;
        })
}

// getProposals()
// getProposalsByID(1)
// getProposalUsers(1);

module.exports = { getProposals , getProposalsByID , getProposalUsers };