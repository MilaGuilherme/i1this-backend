
const read = require('../../repositories/userTypes/read')
const write = require('../../repositories/userTypes/write')

//TODO TEST THIS

/*
* GET SERVICES
*/

/**
 * @get /usertypes
 * @returns {Promise}
 */
async function get() {
    return read.get().then((response) => {
        console.log(response)
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No user types found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get usertypes/{id}
 * @param {Number} id
 * @returns {Promise}
 */
async function getById(id) {
    let filter = {
        where:{
            "id":id
        }
    }
    return read.getBy(filter).then((response) => {
        console.log(response)
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No proposal with id ${id} was found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get usertypes/{id}/users
 * @param {Number} id
 * @returns {Promise}
 */
async function getTypeUsers(id) {
    let filter = {
        where:{
            "id":id
        },
    }
    return read.getUsers(filter).then((response) => {
        console.log(response)
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No users who accepted the proposal of ID ${id} were found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/*
* POST SERVICES
*/

/**
 * @post /usertypes
 * @param {Object} data
 * @returns {Promise}
 */
async function post(data) {
    if (!data.agent_id)
        return { "status": 403, message: 'missing: agent_id' }

    else if (!data.name)
        return { "status": 403, message: 'missing: name' }

    else if (!data.data.permissions)
        return { "status": 403, message: 'missing: data.permissions' }

    else {
        return write.insertUserType(data.data, data.agent_id)
            .then(response => {
                response.status ?
                    res = response :
                    res = response.length === 0 ?
                        { "status": 404, "message": "Not Found", "content": `` } :
                        { "status": 201, "message": "success", "content": response }
                return res;
            })
    }
}

/*
* PUT SERVICES
*/

/**
 * @put /usertypes/{id}
 * @param {number} id
 * @param {Object} data
 * @returns {Promise}
 */
async function update(id, data) {
    return write.updateUser(id, data.data, data.agent_id)
        .then(response => {
            let res;
            response.status ? res = response : res = { "status": 201, "message": "success", "content": response }
            return res;
        })
}

module.exports = { get, getById, getTypeUsers, post, update }