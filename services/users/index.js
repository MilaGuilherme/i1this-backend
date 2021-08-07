const bcrypt = require('bcrypt');
const saltRounds = 10;
const read = require('../../repositories/users/read')
const write = require('../../repositories/users/write')

/*
* GET SERVICES
*/

/**
 * @get /users
 * @returns {Promise}
 */
async function get() {
    return read.getAll().then((response) => {
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
    let filter = {
        where: {
            "id": id
        }
    }
    return read.getBy(filter).then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No user with id ${id} was found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}
/**
 * @get users/
 * @param {Number} id
 * @returns {Promise}
 */
async function getByEmail(email) {
    let filter = {
        Where: {
            "email": email
        }
    }
    return read.getBy(filter).then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No user with id ${email} was found` } :
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
    await bcrypt.hash(data["data"]["password"], saltRounds).then(function (hash) {
        data.data["password"] = hash;
    });
    return write.insertUser(data.data)
        .then(response => {
            return response;
        })
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
        return { "status": 403, message: 'missing: agent_id' }

    else if (!user_id)
        return { "status": 403, message: 'missing: user_id' }

    else if (!product_id)
        return { "status": 403, message: 'missing: product_id' }
    else {
        const data = {
            "user_id": user_id,
            "product_id": product_id,
            "oned_at": new Date()
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
        return { "status": 403, message: 'missing: agent_id' }

    else if (!user_id)
        return { "status": 403, message: 'missing: user_id' }

    else if (!category_id)
        return { "status": 403, message: 'missing: category_id' }

    else {
        const data = {
            "user_id": user_id,
            "category_id": category_id,
            "watched_at": new Date()
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
        return { "status": 403, message: 'missing: agent_id' }

    else if (!user_id)
        return { "status": 403, message: 'missing: user_id' }

    else if (!proposal_id)
        return { "status": 403, message: 'missing: proposal_id' }

    else {
        const data = {
            "user_id": user_id,
            "proposal_id": proposal_id,
            "accepted_at": new Date(),
            "buying_intent": info.intent || false,
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
 * @put /users/{user_id}
 * @param {number} id
 * @param {Object} data
 * @returns {Promise}
 */
async function update(id, data) {
    if (!id)
        return { "status": 403, message: 'id' }

    if (!data.agent_id)
        return { "status": 403, message: 'missing: agent_id' }

    else if (!data.data)
        return { "status": 403, message: 'missing: data' }

    else {
        if (data["data"]["password"]) {
            await bcrypt.hash(data["data"]["password"], saltRounds).then(function (hash) {
                data.data["password"] = hash;
            });
        }
        data.data["updated_at"] = new Date();
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
        return { "status": 403, message: 'missing: agent_id' }

    else if (!user_id)
        return { "status": 403, message: 'missing: user_id' }

    else if (!product_id)
        return { "status": 403, message: 'missing: product_id' }

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
        return { "status": 403, message: 'missing: agent_id' }

    else if (!user_id)
        return { "status": 403, message: 'missing: user_id' }

    else if (!category_id)
        return { "status": 403, message: 'missing: category_id' }

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
        return { "status": 403, message: 'missing: agent_id' }

    else if (!user_id)
        return { "status": 403, message: 'missing: user_id' }

    else if (!proposal_id)
        return { "status": 403, message: 'missing: proposal_id' }

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

module.exports = { get, getById, getByEmail, getProducts, getOnes, getAcceptedProposals, getPostedProposals, getCategories, post, postOne, postWatchCategory, postAcceptProposal, update, deleteOne, deleteWatch, deletAcceptance }