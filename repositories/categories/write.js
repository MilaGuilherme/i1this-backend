const methods = require('../../helpers/methodsHelper');

/**
 * @post /categories
 * @param {Object} data
 * @param {number} agent_id
 * @returns {Promise}
 */
function insertCategory(data, agent_id) {
    return methods.insert(tables.categoriesTable, data, agent_id)
        .then(response => {
            return response
        })
}

/**
 * @put /categories/{category_id}
 * @param {number} id
 * @param {Object} data
 * @param {number} agent_id
 * @returns {Promise}
 */
function updateCategory(id, data, agent_id) {
    return methods.update(tables.categoriesTable, { id }, data, agent_id).then(response => {
        return response
    })
};

/**
 * @delete categories/{category_id}
 * @param {number} id
 * @param {number} agent_id
 * @returns {Promise}
 */
function removeCategory(id, agent_id) {
    methods.updateBatch(tables.PrdInCatTable, { "category_id": id },{ "category_id": 0 }, agent_id, id)
    return methods.remove(tables.categoriesTable, { id }, agent_id).then(response => {
        return response
    })
}

/**
 * @post /categories/{parent_id}/children/{child_id}
 * @param {Object} data
 * @param {number} agent_id
 * @returns {Promise}
 */
function insertRelationship(data, agent_id) {
    return methods.insert(tables.catParentsTable, data, agent_id).then(response => {
        return response
    })
}

/**
 * @delete /categories/{parent_id}/children/{child_id}
 * @param {Object} data
 * @param {number} agent_id
 * @returns {Promise}
 */
function removeRelationship(data, agent_id) {
    return methods.remove(tables.catParentsTable, data, agent_id).then(response => {
        return response
    })
}

module.exports = { insertCategory, removeCategory, updateCategory, insertRelationship, removeRelationship };