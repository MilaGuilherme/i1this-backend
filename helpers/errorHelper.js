/**
 * @param {Object} data
 * @returns {String}
 */
function errorHelper(data){
    switch (data.code) {
        case "ECONNREFUSED":
            return {"status": 503, "message" :'Service Unavailable', "content":{}}
        case "ER_DUP_ENTRY":
            return {"status": 502, "message" :'Duplicate entry', "content":{}}
        default:
            return data;
    } 
}

module.exports = errorHelper;