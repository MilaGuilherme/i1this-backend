
const read = require('../../repositories/categories/read')
const write = require('../../repositories/categories/write')

/*
* GET SERVICES
*/

/**
 * @get /categories
 * @returns {Promise}
 */
function get() {
    return read.getCategories().then((response) => {
        return response;
    })
}

/**
 * @get categories/{id}
 * @param {Number} id
 * @returns {Promise}
 */
function getById(id) {
    return read.getCategoryById(id).then((response) => {
        return response;
    })
}

/**
 * @get categories/{category_id}/products
 * @param {Number} id
 * @returns {Promise}
 */
function getProducts(id) {
    return read.getCategoryProducts(id).then((response) => {
        return response;
    })
}

/**
 * @get categories/{category_id}/watchers
 * @param {Number} category_id
 * @returns {Promise}
 */
function getWatchers(id) {
    return read.getCategoryWatchers(id).then((response) => {
        return response;
    })
}

/**
 * @get categories/{category_id}/parents
 * @param {Number} child_id
 * @returns {Promise}
 */
function getParents(id) {
    return read.getCategoryParents(id).then((response) => {
        return response;
    })
}

/**
 * @get categories/{category_id}/children
 * @param {Number} parent_id
 * @returns {Promise}
 */
function getChildren(id) {
    return read.getCategoryChildren(id).then((response) => {
        return response;
    })
}

/*
* POST SERVICES
*/

/**
 * @post /categories
 * @param {number} agent_id
 * @param {Object} data
 * @returns {Promise}
 */
async function post(data) {
    if (!data.agent_id)
        return 'missing: agent_id'

    else if (!data.data)
        return 'missing: data'

    else if (!data.data.name)
        return 'missing: data.name'

    else {
        return write.insertCategory(data.agent_id, data.data)
            .then(response => {
                return response
            })
    }
}

/**
 * @patch /categories/{category_id}
 * @param {number} id
 * @param {number} agent_id
 * @param {Object} data
 * @returns {Object}
 */

/**
 * @delete categories/{category_id}
 * @param {number} id
 * @param {number} agent_id
 * @returns {Object}
 */

/**
 * @post /categories/{parent_id}/children/{child_id}
 * @param {number} agent_id
 * @param {number} parent_id
 * @param {number} child_id
 * @returns {Object}
 */


module.exports = { get, getById, getProducts, getWatchers, getParents, getChildren, post }