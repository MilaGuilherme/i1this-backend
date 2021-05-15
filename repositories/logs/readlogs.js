
const tables = require("../tables.json")
const methods = require('../methods');

/**
 * @get /logs
 * @returns {Object}
 */
 function getLogs() {
    try {
        methods.getAll(tables.logsTable).then((data) => {
            let res = data.length === 0 ? `No logs found` : data
            return res
        })
    }
    catch (err) {
        return err
    }
}

/**
 * @get logs/{modified_by}
 * @param {Number} id
 * @returns {Object}
 */
function getLogByModifiedBy(id) {
    const data = { "id": id }
    try {
        methods.getBy(tables.logsTable, data).then((data) => {
            let res = data.length === 0 ? `No log modified by the user with the ID ${id} was found` : data
            return res
        })
    }
    catch (err) {
        return err
    }
}

/**
 * @get logs/{modified_table}
 * @param {String} tableName
 * @returns {Object}
 */
function getLogByModifiedTable(tableName) {
    const data = { "modified_table": tableName }
    try {
        methods.getBy(tables.logsTable, data).then((data) => {
            let res = data.length === 0 ? `No log of modifications on the table '${tableName}' was found` : data
            return res
        })
    }
    catch (err) {
        return err
    }
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
        "modified_id":modified_id
    }
    try {
        methods.getBy(tables.logsTable, data).then((data) => {
            let res = data.length === 0 ? `No log of modifications on the table '${tableName}' and entity with ${modified_id} was found` : data
            console.log(res)
            return res
        })
    }
    catch (err) {
        return err
    }
}

module.exports = { getLogs, getLogByModifiedBy, getLogByModifiedTable, getLogByModifiedTableAndId }