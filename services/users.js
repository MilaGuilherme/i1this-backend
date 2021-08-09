const read = require('../repositories/users/read')
const write = require('../repositories/users/write')
const statusHelper = require("../helpers/statusHelper");
const bcrypt = require('bcrypt');
const saltRounds = 10;

/*
* GET SERVICES
*/

/**
 * @get /users
 * @param {Object} filter
 * @returns {Promise}
 */
async function get(filter = null) {
    filter = {
        where: {
            ...filter,
            active: true
        },
        attributes: ['id', 'name', 'UserTypeId']
    }
    return read.get(filter).then((response) => {
        return statusHelper(response, "No users were found")
    })
}

/**
 * @get users/{UserId}/products
 * @param {Object} filter
 * @returns {Promise}
 */
async function getProducts(filter) {
    filter = {
        where: {
            ...filter,
            active: true
        },
        attributes: ['id', 'name', 'UserTypeId']
    }
    return read.getUserProduct(filter).then((response) => {
        return statusHelper(response, "No products created by this user were found")
    })
}

/**
 * @get users/{id}/ones
 * @param {Object} filter
 * @returns {Promise}
 */
async function getOnes(filter) {
    filter = {
        where: {
            ...filter,
            active: true
        },
        attributes: ['id', 'name', 'UserTypeId']
    }
    return read.getUserOned(filter).then((response) => {
        return statusHelper(response, "No products with +1 by this user were found")
    })
}

/**
 * @get users/{id}/proposals/accepted
 * @param {Object} filter
 * @returns {Promise}
 */
async function getAcceptedProposals(filter) {
    filter = {
        where: {
            ...filter,
            active: true
        },
        attributes: ['id', 'name', 'UserTypeId']
    }
    return read.getUserAccepted(filter).then((response) => {
        return statusHelper(response, "No proposals accepted by this user were found")
    })
}

/**
 * @get users/{id}/proposals/created
 * @param {Object} filter
 * @returns {Promise}
 */
async function getPostedProposals(filter) {
    filter = {
        where: {
            ...filter,
            active: true
        },
        attributes: ['id', 'name', 'UserTypeId']
    }
    return read.getUserProposed(filter).then((response) => {
        return statusHelper(response, "No proposals posted by this user were found")
    })
}

/**
 * @get users/{id}/categories
 * @param {Object} filter
 * @returns {Promise}
 */
async function getCategories(filter) {
    filter = {
        where: {
            ...filter,
            active: true
        },
        attributes: ['id', 'name', 'UserTypeId']
    }
    return read.getUserWatched(filter).then((response) => {
        return statusHelper(response, "No categories watched by this user were found")
    })
}


/*
* POST SERVICES
*/


/**
 * @post /signin
 * @returns {Promise}
 */
async function signin(email) {
    let filter = {
        where: { email: email },
        attributes: ['id', 'password', 'UserTypeId']
    }
    return read.login(filter).then((response) => {
        return statusHelper(response, "No user with this e-mail was found")
    })
}


/**
 * @post /signup
 * @returns {Promise}
 */
async function signup(data) {
    if (!data.password)
        return { "status": 403, message: 'Missing information: Password' }
    else {
        await bcrypt.hash(data["password"], saltRounds).then(function (hash) {
            data["password"] = hash;
        });
        return write.signup(data)
            .then(response => {
                response.password = undefined
                response.active = undefined
                return statusHelper(response)
            })
    }
}


/**
 * @post /users
 * @param {Object} data
 * @param {Number} auth
 * @returns {Promise}
 */
async function post(data, auth) {
    if (!data.password)
        return { "status": 403, message: 'Missing information: Password' }
    else {
        await bcrypt.hash(data["password"], saltRounds).then(function (hash) {
            data["password"] = hash;
        });
        if (auth.type == 1) {
            return write.insertUser(data)
                .then(response => {
                    return statusHelper(response)
                })
        }
        else {
            res = { "status": 403, "message": "Forbidden", "content": `` }
            return res;
        }
    }
}


/**
 * @post /users/{UserId}/one/{ProductId}
 * @param {Object} data
 * @param {Number} auth
 * @returns {Promise} 
 */
async function postOne(data, auth) {
    if (auth.user == data.id || auth.type == 1) {
        return write.insertOne(data)
            .then(response => {
                return statusHelper(response)
            })
    }
}

/**
 * @post /users/{UserId}/category/{CategoryId}
 * @param {Object} data
 * @param {Number} auth
 * @returns {Promise} 
 */
async function postWatchCategory(data, auth) {
    if (auth.user == data.id || auth.type == 1) {
        return write.insertWatch(data)
            .then(response => {
                return statusHelper(response)
            })
    }
}

/**
 * @post /users/{UserId}/proposals/{ProposalId}
 * @param {Object} data
 * @param {Number} auth
 * @returns {Promise} 
 */
async function postAcceptProposal(data, auth) {
    if (auth.user == data.id || auth.type == 1) {
        return write.insertAccept(data)
            .then(response => {
                return statusHelper(response)
            })
    }
}

/*
* PUT SERVICES
*/

/**
 * @put /users/{UserId}
 * @param {Object} data
 * @param {Number} auth
 * @returns {Promise}
 */
async function update(data, auth) {
    if (auth.user == data.id || auth.type == 1) {
        return write.updateUser(data)
            .then(response => {
                return statusHelper(response)
            })
    }
}

/*
* DELETE SERVICES
*/

/**
 * @delete /users/{UserId}/one/{ProductId}
 * @param {Object} data
 * @param {Number} auth
 * @returns {Promise}
 */
async function deleteOne(data,auth) {
    if (auth.user == data.id || auth.type == 1) {
        return write.removeOne(data)
            .then(response => {
                return statusHelper(response)
            })
    }
}

/**
 * @delete /users/{UserId}/category/{CategoryId}
 * @param {Object} data
 * @param {Number} auth
 * @returns {Promise}
 */
async function deleteWatch(data,auth) {
    if (auth.user == data.id || auth.type == 1) {
        return write.removeWatch(data)
            .then(response => {
                return statusHelper(response)
            })
    }
}

/**
 * @delete /users/{UserId}/proposal/{ProposalId}
 * @param {Object} data
 * @param {Number} auth
 * @returns {Promise}
 */
async function deleteAcceptance(data,auth) {
    if (auth.user == data.id || auth.type == 1) {
        return write.removeAccept(data)
            .then(response => {
                return statusHelper(response)
            })
    }
}

module.exports = { signin, signup, get, getProducts, getOnes, getAcceptedProposals, getPostedProposals, getCategories, post, postOne, postWatchCategory, postAcceptProposal, update, deleteOne, deleteWatch, deleteAcceptance }