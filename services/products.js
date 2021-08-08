
const read = require('../repositories/products/read')
const write = require('../repositories/products/write')

//TODO TEST THIS

/*
* GET SERVICES
*/

/**
 * @get /products
 * @returns {Promise}
 */
async function get(params) {
    return read.getProducts(params).then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No products found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get products/{id}
 * @param {Number} id
 * @returns {Promise}
 */
async function getById(id) {
    return read.getProductByID(id).then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No product with id ${id} was found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get products/{ProductId}/categories
 * @param {Number} id
 * @returns {Promise}
 */
async function getCategories(id) {
    return read.getProductCategories(id).then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No category for the product of ID ${id} were found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get products/{ProductId}/onedby
 * @param {Number} ProductId
 * @returns {Promise}
 */
async function getOnes(id) {
    return read.getProductOnes(id).then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No users who gave +1 for the product of ID ${id} were found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}

/**
 * @get products/{ProductId}/proposals
 * @param {Number} ProductId
 * @returns {Promise}
 */
async function getProposals(id) {
    return read.getProductProposals(id).then((response) => {
        response.status ?
            res = response :
            res = response.length === 0 ?
                { "status": 404, "message": "Not Found", "content": `No proposals for the product of ID ${id} were found` } :
                { "status": 200, "message": "success", "content": response }
        return res;
    })
}


/*
* POST SERVICES
*/

/**
 * @post /products
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

    else if (!data.data.created_by)
        return {"status":403, message: 'missing: data.created_by' }

    else if (!data.data.description)
        return {"status":403, message: 'missing: data.description' }

    else if (!data.data.CategoryId)
        return {"status":403, message: 'missing: data.CategoryId' }

    else {
        data.data.created_at = new Date();
        data.data.updated_at = new Date();
        data.data.photos?data.data.photos = JSON.stringify(data.data.photos):null
        return write.insertProduct(data.data, data.agent_id)
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
 * @post /products/{ProductId}/category/{CategoryId}
 * @param {number} ProductId
 * @param {number} CategoryId
 * @param {Object} info
 * @returns {Promise} 
 */
async function postRelationship(ProductId, CategoryId, info) {
    if (!info.agent_id)
        return {"status":403, message: 'missing: agent_id' }

    else if (!ProductId)
        return {"status":403, message: 'missing: ProductId' }

    else if (!CategoryId)
        return {"status":403, message: 'missing: CategoryId' }

    else {
        const data = {
            "ProductId": ProductId,
            "CategoryId": CategoryId
        }
        return write.insertProductInCategory(data, info.agent_id)
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
 * @put /categories/{CategoryId}
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
        return write.updateProduct(id, data.data, data.agent_id)
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
 * @delete /products/{ProductId}/category
 * @param {number} ProductId
 * @param {Object} info
 * @returns {Promise} 
 */
async function deleteRelationship(ProductId, info) {
    if (!info.agent_id)
        return {"status":403, message: 'missing: agent_id' }

    else if (!ProductId)
        return {"status":403, message: 'missing: ProductId' }

    else {
        const data = {
            "ProductId": ProductId,
            "CategoryId": 0
        }
        return write.removeProductFromCategory(data, info.agent_id)
            .then(response => {
                let res;
                response.status ? res = response : res = response === 0 ? { "status": 404, "content": "No content to delete" } : { "status": 202, "content": "Content deleted" }
                return res;
            })
    }
}

module.exports = { get, getById, getCategories, getOnes, getProposals, post, postRelationship, update, deleteRelationship }