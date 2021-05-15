
const tables = require("../tables.json")
const methods = require('../methods');

/**
 * @get /logs
 * @returns {Object}
 */
 function getLogs() {
  return methods.getAll(tables.logsTable).then((data) => {
            let response = data.length === 0 ? `No logs found` : data
            return response
        }) 
}

/**
 * @get logs/{modified_by}
 * @param {Number} id
 * @returns {Object}
 */
function getLogByModifiedBy(id) {
    const data = { "id": id }
  return methods.getBy(tables.logsTable, data).then((data) => {
            let response = data.length === 0 ? `No log modified by the user with the ID ${id} was found` : data
            return response
        }) 
}

/**
 * @get logs/{modified_table}
 * @param {String} tableName
 * @returns {Object}
 */
function getLogByModifiedTable(tableName) {
    const data = { "modified_table": tableName }
  return methods.getBy(tables.logsTable, data).then((data) => {
            let response = data.length === 0 ? `No log of modifications on the table '${tableName}' was found` : data
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
        "modified_id":modified_id
    }
  return methods.getBy(tables.logsTable, data).then((data) => {
            let response = data.length === 0 ? `No log of modifications on the table '${tableName}' and entity with ${modified_id} was found` : data
            console.log(response)
            return response
        }) 
}

module.exports = { getLogs, getLogByModifiedBy, getLogByModifiedTable, getLogByModifiedTableAndId }