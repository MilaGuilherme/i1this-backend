
const read = require('../../repositories/users/read')
const write = require('../../repositories/users/write')

//TODO TEST THIS

/*
* GET SERVICES
*/

/**
 * @get /users
 * @returns {Promise}
 */
async function get() {
    return read.getUsers().then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No users found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get users/{id}
 * @param {Number} id
 * @returns {Promise}
 */
async function getById(id) {
    return read.getUserByID(id).then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No user with id ${id} was found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get users/{user_id}/products
 * @param {Number} id
 * @returns {Promise}
 */
async function getProducts(id) {
    return read.getUserProduct(id).then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No products for the user of ID ${id} were found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get users/{id}/ones
 * @param {Number} id
 * @returns {Promise}
 */
async function getOnes(id) {
    return read.getUserOned(id).then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No products with +1 by the user of ID ${id} were found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get users/{id}/proposals
 * @param {Number} id
 * @returns {Promise}
 */
async function getAcceptedProposals(id) {
    return read.getUserAccepted(id).then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No proposals accepted by the user of ID ${id} were found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get users/{id}/proposals
 * @param {Number} id
 * @returns {Promise}
 */
async function getPostedProposals(id) {
    return read.getUserProposed(id).then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No proposals posted by the user of ID ${id} were found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get users/{id}/categories
 * @param {Number} id
 * @returns {Promise}
 */
async function getCategories(id) {
    return read.getUserWatched(id).then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No categories watched by the user of ID ${id} were found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}


/*
* POST SERVICES
*/

/**
 * @post /users
 * @param {Object} data
 * @returns {Promise}
 */
async function post(data) {
    if (!data.agent_id)
        return { code: 403, message: 'missing: agent_id' }

    else if (!data.data)
        return { code: 403, message: 'missing: data' }

    else if (!data.data.name)
        return { code: 403, message: 'missing: data.name' }

    else if (!data.data.password)
        return { code: 403, message: 'missing: data.password' }

    else if (!data.data.email)
        return { code: 403, message: 'missing: data.email' }

    else if (!data.data.type_id)
        return { code: 403, message: 'missing: data.type_id' }

    else {
        return write.insertUser(data.data, data.agent_id)
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

/**
 * @post /users/{user_id}/one/{product_id}
 * @param {number} user_id
 * @param {number} product_id
 * @param {Object} info
 * @returns {Promise} 
 */
async function postOne(user_id, product_id, info) {
    if (!info.agent_id)
        return { code: 403, message: 'missing: agent_id' }

    else if (!user_id)
        return { code: 403, message: 'missing: user_id' }

    else if (!product_id)
        return { code: 403, message: 'missing: product_id' }

    else {
        const data = {
            "user_id": user_id,
            "product_id": product_id
        }
        return write.insertOne(data, info.agent_id)
            .then(response => {
                let res;
                response.status ? res = response : res = { "status": 201, "message": "success", "content": response }
                return res;
            })
    }
}

/**
 * @post /users/{user_id}/category/{category_id}
 * @param {number} user_id
 * @param {number} category_id
 * @param {Object} info
 * @returns {Promise} 
 */
async function postWatchCategory(user_id, category_id, info) {
    if (!info.agent_id)
        return { code: 403, message: 'missing: agent_id' }

    else if (!user_id)
        return { code: 403, message: 'missing: user_id' }

    else if (!category_id)
        return { code: 403, message: 'missing: category_id' }

    else {
        const data = {
            "user_id": user_id,
            "category_id": category_id
        }
        return write.insertWatch(data, info.agent_id)
            .then(response => {
                let res;
                response.status ? res = response : res = { "status": 201, "message": "success", "content": response }
                return res;
            })
    }
}

/**
 * @post /users/{user_id}/proposals/{proposal_id}
 * @param {number} user_id
 * @param {number} proposal_id
 * @param {Object} info
 * @returns {Promise} 
 */
async function postAcceptProposal(user_id, proposal_id, info) {
    if (!info.agent_id)
        return { code: 403, message: 'missing: agent_id' }

    else if (!user_id)
        return { code: 403, message: 'missing: user_id' }

    else if (!proposal_id)
        return { code: 403, message: 'missing: proposal_id' }

    else {
        const data = {
            "user_id": user_id,
            "proposal_id": proposal_id
        }
        return write.insertAccept(data, info.agent_id)
            .then(response => {
                let res;
                response.status ? res = response : res = { "status": 201, "message": "success", "content": response }
                return res;
            })
    }
}

/*
* PUT SERVICES
*/

/**
 * @put /categories/{category_id}
 * @param {number} id
 * @param {Object} data
 * @returns {Promise}
 */
async function update(id, data) {
    if (!id)
        return { code: 403, message: 'id' }

    if (!data.agent_id)
        return { code: 403, message: 'missing: agent_id' }

    else if (!data.data)
        return { code: 403, message: 'missing: data' }

    else {
        return write.updateUser(id, data.data, data.agent_id)
            .then(response => {
                let res;
                response.status ? res = response : res = { "status": 201, "message": "success", "content": response }
                return res;
            })
    }
}

/*
* DELETE SERVICES
*/


/**
 * @delete /users/{user_id}/one/{product_id}
 * @param {number} user_id
 * @param {number} product_id
 * @param {Object} info
 * @returns {Promise} 
 */
async function deleteOne(user_id, product_id, info) {
    if (!info.agent_id)
        return { code: 403, message: 'missing: agent_id' }

    else if (!user_id)
        return { code: 403, message: 'missing: user_id' }

    else if (!product_id)
        return { code: 403, message: 'missing: product_id' }

    else {
        const data = {
            "product_id": product_id,
            "user_id": user_id
        }
        return write.removeOne(data, info.agent_id)
            .then(response => {
                let res;
                response.status ? res = response : res = response === 0 ? { "status": 404, "content": "No content to delete" } : { "status": 202, "content": "Content deleted" }
                return res;
            })
    }
}

/**
 * @delete /users/{user_id}/category/{category_id}
 * @param {number} user_id
 * @param {number} category_id
 * @param {Object} info
 * @returns {Promise} 
 */
async function deleteWatch(user_id, category_id, info) {
    if (!info.agent_id)
        return { code: 403, message: 'missing: agent_id' }

    else if (!user_id)
        return { code: 403, message: 'missing: user_id' }

    else if (!category_id)
        return { code: 403, message: 'missing: category_id' }

    else {
        const data = {
            "category_id": category_id,
            "user_id": user_id
        }
        return write.removeWatch(data, info.agent_id)
            .then(response => {
                let res;
                response.status ? res = response : res = response === 0 ? { "status": 404, "content": "No content to delete" } : { "status": 202, "content": "Content deleted" }
                return res;
            })
    }
}

/**
 * @delete /users/{user_id}/proposals/{proposal_id}
 * @param {number} user_id
 * @param {number} proposal_id
 * @param {Object} info
 * @returns {Promise} 
 */
async function deletAcceptance(user_id, proposal_id, info) {
    if (!info.agent_id)
        return { code: 403, message: 'missing: agent_id' }

    else if (!user_id)
        return { code: 403, message: 'missing: user_id' }

    else if (!proposal_id)
        return { code: 403, message: 'missing: proposal_id' }

    else {
        const data = {
            "proposal_id": proposal_id,
            "user_id": user_id
        }
        return write.removeAccept(data, info.agent_id)
            .then(response => {
                let res;
                response.status ? res = response : res = response === 0 ? { "status": 404, "content": "No content to delete" } : { "status": 202, "content": "Content deleted" }
                return res;
            })
    }
}

module.exports = { get, getById, getProducts, getOnes, getAcceptedProposals, getPostedProposals,getCategories, post, postOne, postWatchCategory, postAcceptProposal, update, deleteOne, deleteWatch, deletAcceptance }