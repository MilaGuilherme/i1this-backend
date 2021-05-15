/**
 * @param {Object} data
 * @returns {String}
 */
function errorHelper(data){
    switch (data.code) {
        case "ECONNREFUSED":
            return "502 - Connection refused"
        case "ER_DUP_ENTRY":
            return data.sqlMessage
        default:
            return data;
    } 
}

module.exports = errorHelper;