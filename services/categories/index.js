
const read = require('../../repositories/categories/read')
const write = require('../../repositories/categories/write')

/*
* GET SERVICES
*/

/**
 * @get /categories
 * @returns {Promise}
 */
async function get() {
    return read.getCategories().then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No categories found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get categories/{id}
 * @param {Number} id
 * @returns {Promise}
 */
async function getById(id) {
    return read.getCategoryById(id).then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No category with id ${id} was found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get categories/{category_id}/products
 * @param {Number} id
 * @returns {Promise}
 */
async function getProducts(id) {
    return read.getCategoryProducts(id).then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No products in the category of ID ${id} were found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get categories/{category_id}/watchers
 * @param {Number} category_id
 * @returns {Promise}
 */
async function getWatchers(id) {
    return read.getCategoryWatchers(id).then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No users watching in the category of ID ${id} were found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get categories/{category_id}/parents
 * @param {Number} child_id
 * @returns {Promise}
 */
async function getParents(id) {
    return read.getCategoryParents(id).then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No parents to the category of ID ${id} were found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get categories/{category_id}/children
 * @param {Number} parent_id
 * @returns {Promise}
 */
async function getChildren(id) {
    return read.getCategoryChildren(id).then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No children to the category of ID ${id} were found` } :
                { "status": 200, "message": "success", "content": response }
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
async function post(data) {
    if (!data.agent_id)
        return {"status":403, message: 'missing: agent_id' }

    else if (!data.data)
        return {"status":403, message: 'missing: data' }

    else if (!data.data.name)
        return {"status":403, message: 'missing: data.name' }

    else {
        return write.insertCategory(data.data, data.agent_id)
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
 * @post /categories/{parent_id}/children/{child_id}
 * @param {number} parent_id
 * @param {number} child_id
 * @param {Object} info
 * @returns {Promise} 
 */
async function postRelationship(parent_id, child_id, info) {
    if (!info.agent_id)
        return {"status":403, message: 'missing: agent_id' }

    else if (!parent_id)
        return {"status":403, message: 'missing: parent_id' }

    else if (!child_id)
        return {"status":403, message: 'missing: child_id' }

    else {
        const data = {
            "parent_id": parent_id,
            "child_id": child_id
        }
        return write.insertRelationship(data, info.agent_id)
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
        return {"status":403, message: 'id' }

    if (!data.agent_id)
        return {"status":403, message: 'missing: agent_id' }

    else if (!data.data)
        return {"status":403, message: 'missing: data' }

    else {
        return write.updateCategory(id, data.data, data.agent_id)
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
 * @delete categories/{category_id}
 * @param {number} id
 * @param {Object} info
 * @returns {Promise}
 */
async function del(id, info) {
    if (!id)
        return {"status":403, message: 'id' }

    if (!info.agent_id)
        return {"status":403, message: 'missing: agent_id' }

    else {
        return write.removeCategory(id, info.agent_id)
            .then(response => {
                let res;
                response.status ? res = response : res = response === 0 ? { "status": 404, "content": "No content to delete" } : { "status": 202, "content": "Content deleted" }
                return res;
            })
    }
}

/**
 * @delete /categories/{parent_id}/children/{child_id}
 * @param {number} parent_id
 * @param {number} child_id
 * @param {Object} info
 * @returns {Promise} 
 */
async function deleteRelationship(parent_id, child_id, info) {
    if (!info.agent_id)
        return {"status":403, message: 'missing: agent_id' }

    else if (!parent_id)
        return {"status":403, message: 'missing: parent_id' }

    else if (!child_id)
        return {"status":403, message: 'missing: child_id' }

    else {
        const data = {
            "parent_id": parent_id,
            "child_id": child_id
        }
        return write.removeRelationship(data, info.agent_id)
            .then(response => {
                let res;
                response.status ? res = response : res = response === 0 ? { "status": 404, "content": "No content to delete" } : { "status": 202, "content": "Content deleted" }
                return res;
            })
    }
}

module.exports = { get, getById, getProducts, getWatchers, getParents, getChildren, post, postRelationship, update, del, deleteRelationship }