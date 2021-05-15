
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
        let res;
        response.status ? res = response : res = { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get categories/{id}
 * @param {Number} id
 * @returns {Promise}
 */
function getById(id) {
    return read.getCategoryById(id).then((response) => {
        let res;
        response.status ? res = response : res = { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get categories/{category_id}/products
 * @param {Number} id
 * @returns {Promise}
 */
function getProducts(id) {
    return read.getCategoryProducts(id).then((response) => {
        let res;
        response.status ? res = response : res = { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get categories/{category_id}/watchers
 * @param {Number} category_id
 * @returns {Promise}
 */
function getWatchers(id) {
    return read.getCategoryWatchers(id).then((response) => {
        let res;
        response.status ? res = response : res = { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get categories/{category_id}/parents
 * @param {Number} child_id
 * @returns {Promise}
 */
function getParents(id) {
    return read.getCategoryParents(id).then((response) => {
        let res;
        response.status ? res = response : res = { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get categories/{category_id}/children
 * @param {Number} parent_id
 * @returns {Promise}
 */
function getChildren(id) {
    return read.getCategoryChildren(id).then((response) => {
        let res;
        response.status ? res = response : res = { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/*
* POST SERVICES
*/

/**
 * @post /categories
 * @param {Object} data
 * @returns {Promise}
 */
function post(data) {
    if (!data.agent_id)
        return { code: 403, message: 'missing: agent_id' }

    else if (!data.data)
        return { code: 403, message: 'missing: data' }

    else if (!data.data.name)
        return { code: 403, message: 'missing: data.name' }

    else {
        return write.insertCategory(data.agent_id, data.data)
            .then(response => {
                let res;
                response.status ? res = response : res = { "status": 201, "message": "success", "content": response }
                return res;
            })
    }
}

/**
 * @patch /categories/{category_id}
 * @param {number} id
 * @param {Object} data
 * @returns {Object}
 */
function update(id, data) {
    if (!id)
        return { code: 403, message: 'id' }

    if (!data.agent_id)
        return { code: 403, message: 'missing: agent_id' }

    else if (!data.data)
        return { code: 403, message: 'missing: data' }

    else if (!data.data.name)
        return { code: 403, message: 'missing: data.name' }

    else {
        return write.updateCategory(id, data.data, data.agent_id)
            .then(response => {
                let res;
                response.status ? res = response : res = { "status": 200, "message": "success", "content": response }
                return res;
            })
    }
}

/**
 * @delete categories/{category_id}
 * @param {number} id
 * @param {number} agent_id
 * @returns {Object}
 */
function update(id, data) {
    if (!id)
        return { code: 403, message: 'id' }

    if (!data.agent_id)
        return { code: 403, message: 'missing: agent_id' }

    else if (!data.data)
        return { code: 403, message: 'missing: data' }

    else if (!data.data.name)
        return { code: 403, message: 'missing: data.name' }

    else {
        return write.removeCategory(id, data.agent_id)
            .then(response => {
                let res;
                response.status ? res = response : res = { "status": 200, "message": "Category deleted" }
                return res;
            })
    }
}


//let response = data === 0 ? { "status": 205, "message": "No content to delete" } : { "status": 205, "message": "Deleted content" }

/**
 * @post /categories/{parent_id}/children/{child_id}
 * @param {number} agent_id
 * @param {number} parent_id
 * @param {number} child_id
 * @returns {Object} 
 */


module.exports = { get, getById, getProducts, getWatchers, getParents, getChildren, post, update }