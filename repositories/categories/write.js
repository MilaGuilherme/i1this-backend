const tables = require("../../db/tables.json")
const methods = require('../../helpers/methodsHelper');

//TODO removeParent removeChild

/**
 * @post /categories
 * @param {number} agent_id
 * @param {Object} data
 * @returns {Promise}
 */
function insertCategory(agent_id, data) {
    return methods.insert(tables.categoriesTable, data, agent_id).then(response => {
        return response
    })
}

/**
 * @patch /categories/{category_id}
 * @param {number} id
 * @param {number} agent_id
 * @param {Object} data
 * @returns {Promise}
 */
function updateCategory(id, agent_id, data) {
    return methods.update(tables.categoriesTable, data, id, agent_id).then(response => {
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
    let data = { "category_id": 0 }
    let condition = { "category_id": id }
    methods.updateBatch(tables.PrdInCatTable, condition, data, agent_id)
    return methods.remove(tables.categoriesTable, id, agent_id).then(response => {
        return response
    })
}

/**
 * @post /categories/{parent_id}/children/{child_id}
 * @param {number} agent_id
 * @param {number} parent_id
 * @param {number} child_id
 * @returns {Promise}
 */
function insertRelationship(agent_id, parent_id, child_id) {
    const data = {
        "parent_id": parent_id,
        "child_id": child_id
    }
    return methods.insert(tables.catParentsTable, data, agent_id).then(response => {
        return response
    })
}

module.exports = { insertCategory, removeCategory, updateCategory, insertRelationship };