import connection from "../db/connection";


function insertUser(data){
    try{
        return result = await connection("users")
        .insert({data})
    }
    catch(error){
        console.log(error)
    }
}


function getUserById(id){
    try{
        return result = 
        await connection("users")
        .where("id",id)
    }
    catch(error){
        console.log(error)
    }
}


module.exports = { insertUser , getUserById };