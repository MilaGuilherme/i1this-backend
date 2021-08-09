module.exports = function statusHelper(response , error="Unknown error"){
    console.log("*****************************************************")
    process.env.NODE_ENV === 'development' ? console.log(response) : null;
    console.log("*****************************************************")
    if (!response) {
        return { "status": 500, "message": "No response from the database", "content": error }
    }
    if (response.length == 0) {
        return { "status": 404, "message": "Not Found", "content": error }
    }
    else if (response.length > 0 && response[0] == undefined) {
        return { "status": 400, "message": "Error", "Error": response.toString() }
    }
    else if (response.errors) {
        return { "status": 406, "message": "Error",  "Errors": response.errors.map(m=> m.message) }
    }
    else if (response.id) {
        return { "status": 201, "message": "Success", "content": response }
    }
    else if(response == 1){
        return { "status": 200, "message": "Success","content":"Request completed successfully" }
    }
    else if(response == 0){
        return { "status": 404,"message":"Error","content":"Nothing to change" }
    }
    else if (response.length > 0) {
        return { "status": 200, "message": "Success", "content": response }
    }
    else return response
}