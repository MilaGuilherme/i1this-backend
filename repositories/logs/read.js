//ANCHOR Don't bother with service or controllers for now

const methods = require('../../helpers/methodsHelper');

/**
 * @get /logs
 * @returns {Object}
 */
function getLogs() {
    return methods.getAll(tables.logsTable).then((response) => {
        return response
    })
}

/**
 * @get logs/{modified_by}
 * @param {Number} id
 * @returns {Object}
 */
function getLogByModifiedBy(id) {
    return methods.getBy(tables.logsTable, { "id": id }).then((response) => {
        return response
    })
}

/**
 * @get logs/{modified_table}
 * @param {String} tableName
 * @returns {Object}
 */
function getLogByModifiedTable(tableName) {
    return methods.getBy(tables.logsTable,  { "modified_table": tableName }).then((response) => {
        return response
    })
}

/**
 * @get logs/{modified_table}/{modified_id}
 * @param {String} tableName
 * @param {Number} modified_id
 * @returns {Object}
 */
function getLogByModifiedTableAndId(tableName, modified_id) {
    const data = {
        "modified_table": tableName,
        "modified_id": modified_id
    }
    return methods.getBy(tables.logsTable, data).then((response) => {
        return response
    })
}

module.exports = { getLogs, getLogByModifiedBy, getLogByModifiedTable, getLogByModifiedTableAndId }