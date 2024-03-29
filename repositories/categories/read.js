const { sequelize, User, Product, Category } = require("../../models")

/**
 * @get /categories
 * @param {Object} filter
 * @returns {Object}
 */
async function get(filter) {
    try {
        return await Category.findAll(filter);
    }
    catch (err) {
        return err;
    }
}

/**
 * @get categories/{CategoryId}/products
 * @param {Object} filter
 * @returns {Promise}
 */
async function getCategoryProducts(filter) {
    filter = {
        ...filter,
        include: [{
            model: Product,
            where: {
                active: true
            },
            attributes: ['id', 'name', 'price', 'description', 'photos', 'UserId',[sequelize.literal('(SELECT COUNT(*) FROM product_oned_by WHERE ProductId = `Products`.`id`)'), 'ones']],
            through: { attributes: [] }
        }]
    }
    try {
        return await Category.findAll(filter);
    }
    catch (err) {
        return err;
    }
}

/**
 * @get categories/{CategoryId}/watchers
 * @param {Object} filter
 * @returns {Promise}
 */
async function getCategoryWatchers(filter) {
    filter = {
        ...filter,
        include: [{
            model: User,
            where: {
                active: true
            },
            attributes: ['id', 'name', 'UserTypeId']
        }]
    }
    try {
        return await Category.findAll(filter);
    }
    catch (err) {
        return err;
    }
}


module.exports = { get, getCategoryProducts, getCategoryWatchers };