const tables = require("../../db/tables.json")
const methods = require('../../helpers/methodsHelper');

//TODO removeParent removeChild

/**
 * @post /categories
 * @param {Object} data
 * @param {number} agent_id
 * @returns {Promise}
 */
function insertCategory(data,agent_id) {
    return methods.insert(tables.categoriesTable, data, agent_id)
    .then(response => {
        return response
    })
}


/**
 * @patch /categories/{category_id}
 * @param {number} id
 * @param {Object} data
 * @param {number} agent_id
 * @returns {Promise}
 */
function updateCategory(id, data, agent_id) {
    return methods.update(tables.categoriesTable, id,data, agent_id).then(response => {
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
    methods.updateBatch(tables.PrdInCatTable, data, condition, agent_id)
    return methods.remove(tables.categoriesTable, id, agent_id).then(response => {
        return response
    })
}

/**
 * @post /categories/{parent_id}/children/{child_id}
 * @param {number} parent_id
 * @param {number} child_id
 * @param {number} agent_id
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