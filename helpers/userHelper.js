/**
 * @param {Object} data
 * @returns {JSON}
 */
function allUsers(data){
    return data.length === 0 ? `No users found` : data
}

/**
 * @param {Object} data
 * @param {Number} id
 * @returns {JSON}
 */
function byID(data,id){
    return data.length === 0 ? `No user registered with the ID ${id} were found` : data
}

/**
 * @param {Object} data
 * @param {Number} created_by
 * @returns {JSON}
 */
function userProducts(data,created_by){
    return data.length === 0 ? `No products registered by the user of ID ${created_by} were found` : data
}

/**
 * @param {Object} data
 * @param {Number} user_id
 * @returns {JSON}
 */
function userOned(data,user_id){
    return data.length === 0 ? `No products +1 by the user of ID ${user_id} were found` : data
}
/**
 * @param {Object} data
 * @param {Number} user_id
 * @returns {JSON}
 */
function userWatched(data,user_id){
    return data.length === 0 ? `No categories watched by the user of ID ${user_id} were found` : data
}

module.exports = {allUsers,byID,userProducts,userOned,userWatched};