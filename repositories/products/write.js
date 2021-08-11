const { Product } = require("../../models")

/**
 * @post /products
 * @param {Object} data
 * @returns {Object}
 */
async function insertProduct(data) {
    try {
        let res = await Product.create(data).then(product => {
            return product.addCategories(data.CategoryId).then((res) => {
                return Product.findOne({where:{"id":res[0].ProductId}})
            })
        })
            .catch(err => { return err })
        return res
    }
    catch (err) {
        return err;
    }
}


/**
 * @post /products/{ProductId}/category/{CategoryId}
 * @param {Object} data
 * @returns {Object}
 */
 async function insertProductInCategory(data) {
    try {
        return Product.findOne({ where: { id: data.id } }).then(product => {
            return product.addCategories(data.CategoryId)
        }).catch(err => { return err })
    }
    catch (err) {
        return err;
    }
}

/**
 * @put /products/{id}
 * @param {Object}  data
 * @returns {Object}
 */
async function updateProduct(data) {
    try {
        let res = await Product.update(
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
 * @delete /products/{ProductId}/category
 * @param {Object}  data
 * @returns {Object}
 */
async function removeProductFromCategory(data) {
    try {
        console.log(data)
        return Product.findOne({ where: { id: data.id } }).then(product => {
            return product.removeCategories(data.CategoryId)
        }).catch(err => { return err })
    }
    catch (err) {
        return err;
    }
}

module.exports = { insertProduct, updateProduct, insertProductInCategory, removeProductFromCategory };