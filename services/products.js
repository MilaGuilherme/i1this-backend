
const read = require('../repositories/products/read')
const write = require('../repositories/products/write')
const { sequelize } = require('../models')
const statusHelper = require("../helpers/statusHelper");


//TODO TEST THIS

/*
* GET SERVICES
*/

/**
 * @get /products
 * @param {Object} filter
 * @returns {Promise}
 */
async function get(filter = null, order = null, limit = null) {
    order ? order = { order: [sequelize.literal(`${order} DESC`)] } : order = null
    limit ? limit = { limit: parseInt(limit) } : limit = null

    filter = {
        where: {
            ...filter,
            active: true
        },
        ...limit,
        ...order,
        attributes: ['id', 'name', 'price', 'description', 'photos', 'UserId',
            [sequelize.literal(`(SELECT COUNT(*) FROM product_oned_by WHERE ProductId = Product.id)`), 'ones']]
    }
    console.log(filter)
    return read.get(filter).then((response) => {
        return statusHelper(response, "No products were found")
    })
}


/**
 * @get products/{ProductId}/categories
 * @param {Object} filter
 * @returns {Promise}
 */
async function getCategories(filter) {
    filter = {
        where: {
            ...filter,
            active: true
        },
        attributes: ['id', 'name', 'price', 'description', 'photos', 'UserId',
        [sequelize.literal(`(SELECT COUNT(*) FROM product_oned_by WHERE ProductId = Product.id)`), 'ones']]
    }
    return read.getProductCategories(filter).then((response) => {
        return statusHelper(response, "No products were found in this category")
    })
}

/**
 * @get products/{ProductId}/onedby
 * @param {Number} ProductId
 * @returns {Promise}
 */
async function getOnes(filter) {
    filter = {
        where: {
            ...filter,
            active: true
        },
        attributes: ['id', 'name', 'price', 'description', 'photos', 'UserId',
        [sequelize.literal(`(SELECT COUNT(*) FROM product_oned_by WHERE ProductId = Product.id)`), 'ones']]
    }
    return read.getProductOnes(filter).then((response) => {
        return statusHelper(response, "This product wasn't +1 yet")
    })
}

/**
 * @get products/{ProductId}/proposals
 * @param {Number} ProductId
 * @returns {Promise}
 */
async function getProposals(filter) {
    filter = {
        where: {
            ...filter,
            active: true
        },
        attributes: ['id', 'name', 'price', 'description', 'photos', 'UserId',
        [sequelize.literal(`(SELECT COUNT(*) FROM product_oned_by WHERE ProductId = Product.id)`), 'ones']]
    }
    return read.getProductProposals(filter).then((response) => {
        return statusHelper(response, "No products were found in this category")
    })
}


/*
* POST SERVICES
*/

/**
 * @post /products
 * @param {Object} data
 * @param {Number} auth
 * @returns {Promise} 
 */
async function post(data, auth) {
    if (auth.user == data.userId || auth.type == 1) {
        data.UserId = auth.user
        return write.insertProduct(data)
            .then(response => {
                return statusHelper(response)
            })
    }
    else {
        res = { "status": 403, "message": "Forbidden", "content": '' }
        return res;
    }}

/**
 * @post /products/{ProductId}/category/{CategoryId}
 * @param {Object} data
 * @param {Number} auth
 * @returns {Promise} 
 */
async function postRelationship(data, auth) {
    if (auth.user == data.userId || auth.type == 1) {
        return write.insertProductInCategory(data)
            .then(response => {
                return statusHelper(response)
            })
    }
    else {
        res = { "status": 403, "message": "Forbidden", "content": '' }
        return res;
    }
}

/*
* PUT SERVICES
*/

/**
 * @put /products/{id}
 * @param {Object} data
 * @param {Number} auth
 * @returns {Promise}
 */
async function update(data, auth) {
    if (auth.user == data.userId || auth.type == 1) {
        return write.updateProduct(data)
            .then(response => {
                return statusHelper(response)
            })
    }
    else {
        res = { "status": 403, "message": "Forbidden", "content": '' }
        return res;
    }
}

/*
* DELETE SERVICES
*/


/**
 * @delete /products/{ProductId}/category
 * @param {Object} data
 * @param {Number} auth
 * @returns {Promise} 
 */
async function deleteRelationship(data, auth) {
    if (auth.user == data.userId || auth.type == 1) {
        return write.removeProductFromCategory(data)
            .then(response => {
                return statusHelper(response)
            })
    }
    else {
        res = { "status": 403, "message": "Forbidden", "content": '' }
        return res;
    }
}

module.exports = { get, getCategories, getOnes, getProposals, post, postRelationship, update, deleteRelationship }