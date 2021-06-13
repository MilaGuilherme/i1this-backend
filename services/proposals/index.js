
const read = require('../../repositories/proposals/read')
const write = require('../../repositories/proposals/write')

//TODO TEST THIS

/*
* GET SERVICES
*/

/**
 * @get /proposals
 * @returns {Promise}
 */
async function get() {
    return read.getProposals().then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No proposals found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get proposals/{id}
 * @param {Number} id
 * @returns {Promise}
 */
async function getById(id) {
    return read.getProposalsByID(id).then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No proposal with id ${id} was found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get proposals/{proposal_id}/users
 * @param {Number} id
 * @returns {Promise}
 */
async function getProposalAcceptees(id) {
    return read.getProposalUsers(id).then((response) => {
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
 * @post /proposals
 * @param {Object} data
 * @returns {Promise}
 */
async function post(data) {
    if (!data.agent_id)
        return { code: 403, message: 'missing: agent_id' }

    else if (!data.product_id)
        return { code: 403, message: 'missing: product_id' }

    else if (!data.data.created_by)
        return { code: 403, message: 'missing: data.created_by' }

    else if (!data.data.price)
        return { code: 403, message: 'missing: data.price' }

    else if (!data.data.links)
        return { code: 403, message: 'missing: data.links' }

    else if (!data.data.photos)
        return { code: 403, message: 'missing: data.photos' }

    else if (!data.data.minimun_quantity)
        return { code: 403, message: 'missing: data.minimun_quantity' }

    else if (!data.data.requires_intent)
        return { code: 403, message: 'missing: data.requires_intent' }

    else {
        return write.insertProposal(data.data, data.agent_id)
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

module.exports = { get, getById, getProposalAcceptees, post, update }