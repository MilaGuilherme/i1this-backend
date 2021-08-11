
const read = require('../repositories/categories/read')
const write = require('../repositories/categories/write')
const statusHelper = require("../helpers/statusHelper");

/*
* GET SERVICES
*/

/**
 * @get /categories
 * @param {Object} filter
 * @returns {Promise}
 */
async function get(filter = null) {
    filter = {
        where: {
            ...filter,
        },
        attributes: ['id', 'name']
    }
    return read.get(filter).then((response) => {
        return statusHelper(response, "No categories were found")
    })
}

/**
 * @get categories/{CategoryId}/products
 * @param {Object} filter
 * @returns {Promise}
 */
async function getProducts(filter) {
    filter = {
        where: {
            ...filter,
        },
        attributes: ['id', 'name']
    }
    return read.getCategoryProducts(filter).then((response) => {
        return statusHelper(response, "No products were found in this category")
    })
}

/**
 * @get categories/{CategoryId}/users
 * @param {Object} filter
 * @returns {Promise}
 */
async function getWatchers(filter) {
    filter = {
        where: {
            ...filter,
        },
    }
    return read.getCategoryWatchers(filter).then((response) => {
        return statusHelper(response, "No users were found in this category")
    })
}

/**
 * @get categories/{CategoryId}/children
 * @param {Object} filter
 * @returns {Promise}
 */
async function getChildren(filter) {
    filter = {
        where: {
            "parentId": filter.id,
        },
    }
    return read.get(filter).then((response) => {
        return statusHelper(response, "No categories were found")
    })
}


/*
* POST SERVICES
*/

/**
 * @post /categories
 * @param {Object} data
 * @param {number} auth
 * @returns {Promise}
 */
async function post(data, auth) {
    if (auth.type == 1) {
        return write.insertCategory(data)
            .then(response => {
                return statusHelper(response)
            })
    }
}


/**
 * @post /categories
 * @param {Object} data
 * @param {number} auth
 * @returns {Promise} 
 */
async function postRelationship(data, auth) {
    let filter = {
        "id": data.childId,
        "parentId": data.parentId
    }
    if (auth.type == 1) {
        return write.updateCategory(filter)
            .then(response => {
                return statusHelper(response)
            })
    }
}

/*
* PUT SERVICES
*/

/**
 * @put /categories/{CategoryId}
 * @param {Object} data
 * @param {number} auth
 * @returns {Promise}
 */
async function update(data,auth) {
    if (auth.type == 1) {
        return write.updateCategory(data)
            .then(response => {
                return statusHelper(response)
            })
    }
}

/*
* DELETE SERVICES
*/

/**
 * @delete categories/{CategoryId}
 * @param {Object} data
 * @param {number} auth
 * @returns {Promise}
 */
async function del(data, auth) {
    if (auth.type == 1) {
        return write.removeCategory(data)
            .then(response => {
                return statusHelper(response)
            })
    }
}

/**
 * @delete /categories
 * @param {Object} data
 * @param {number} auth
 * @returns {Promise} 
 */
async function deleteRelationship(data,auth) {
    let filter = {
        "id": data.childId,
        "parentId": 1
    }
    if (auth.type == 1) {
        return write.updateCategory(filter)
            .then(response => {
                return statusHelper(response)
            })
    }
}

module.exports = { get, getProducts, getWatchers, getChildren, post, postRelationship, update, del, deleteRelationship }