
const errorHelper = require("../../helpers/errorHelper")
const db = require('../../models')

//DO NOT USE THE METHODS FROM METHOD.JS

/**
 * @param {string} modifiedTable
 * @param {string} modification
 * @param {number} modifiedId
 * @param {number} modifiedBy
 * @param {Object} oldValue
 * @param {Object} newValue
 * @returns {Promise}
 */
function log(modifiedTable, modification, modifiedId, modifiedBy, oldValue, newValue) {
    let data = {
        modified_table: modifiedTable,
        modification: modification,
        modified_id: modifiedId,
        modified_by: modifiedBy,
        modified_at: new Date(),
        old_value: oldValue,
        new_value: newValue
    }
    return db(tables.logsTable).insert(data)
        .then((id) => {
            db(tables.logsTable).where("id", id)
                .then((data) => {
                    //process.env.NODE_ENV === 'development' ? console.log(data) : null;
                })
        })
        .catch((error) => {
            let err = errorHelper(error);
            //process.env.NODE_ENV === 'development' ? console.log(err) : null;
        })
    }

module.exports = {log}
