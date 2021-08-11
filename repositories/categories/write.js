const { Category } = require("../../models")

/**
 * @post /categories
 * @param {Object} data
 * @returns {Promise}
 */
async function insertCategory(data) {
    try {
        let res = await Category.create(data).catch(err => { return err })
        return res
    }
    catch (err) {
        return err;
    }
}


/**
 * @put /categories/{CategoryId}
 * @param {Object} data
 * @returns {Promise}
 */
async function updateCategory(data) {
    try {
        let res = await Category.update(
            {
                ...data
            }, {
            where: {
                id: data.id
            }
        }).catch(err => { return err })
        return res
    }
    catch (err) {
        return err;
    }
};

/**
 * @delete categories/{CategoryId}
 * @param {Object} data
 * @returns {Promise}
 */
async function removeCategory(data) {
    try {
        return Category.findOne({ "id": data.id }).then((category) => {
            const parent = category.parentId || 1
            return Category.findAll({ "parentId": data.id }).then(() => {
                return Category.update({ parentId: parent },{where:{parentId:data.id}})
                .then(()=>{
                    return Category.destroy({where:{"id":data.id}})
                })
            })
        })
    }
    catch (err) {
        return err;
    }
}

module.exports = { insertCategory, removeCategory, updateCategory };