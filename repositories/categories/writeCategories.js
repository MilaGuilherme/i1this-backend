const tables = require("../tables.json")
const methods = require('../methods');

//TODO removeCategory removeParent removeChild

/**
 * @post /categories
 * @param {number} agent_id
 * @param {Object} data
 * @returns {Object}
 */
function insertCategory(agent_id, data) {
    try {
        methods.insert(tables.categoriesTable, data, agent_id).then((res) => {
            return res
        })
    }
    catch (err) {
        return err
    }
}

/**
 * @patch /categories/{category_id}
 * @param {number} id
 * @param {number} agent_id
 * @param {Object} data
 * @returns {Object}
 */
function updateCategory(id, agent_id, data) {
    try {
        methods.update(tables.categoriesTable, data, id, agent_id).then((res) => {
            return res
        })
    }
    catch (err) {
        return err
    }
};

/**
 * @delete categories/{category_id}
 * @param {number} id
 * @param {number} agent_id
 * @returns {Object}
 */
function removeCategory(id, agent_id) {
    try { 
        let data = { "category_id": 0 }
        let condition = { "category_id": id }
        methods.updateBatch(tables.PrdInCatTable, condition, data, agent_id)
        methods.remove(tables.categoriesTable, id, agent_id).then((res) => {
            return res
        })
    }
    catch (err) {
        return err
    }
}

removeCategory(1, 1)

/**
 * @post /categories/{parent_id}/children/{child_id}
 * @param {number} agent_id
 * @param {number} parent_id
 * @param {number} child_id
 * @returns {Object}
 */
function insertRelationship(agent_id, parent_id, child_id) {
    const data = {
        "parent_id": parent_id,
        "child_id": child_id
    }
    try {
        methods.insert(tables.catParentsTable, data, agent_id).then((res) => {
            return res
        })
    }
    catch (err) {
        return err
    }
}


module.exports = { insertCategory, removeCategory, updateCategory, insertRelationship };