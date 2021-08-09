const { User } = require("../../models")

/**
 * @post /users
 * @param {Object} data
 * @returns {Object}
 */
async function signup(data) {
    try {
        let res = await User.create(data).catch(err => { return err })
        return res
    }
    catch (err) {
        return err;
    }
};

/**
 * @post /users
 * @param {Object} data
 * @returns {Object}
 */
async function insertUser(data) {
    try {
        let res = await User.create(data).catch(err => { return err })
        return res
    }
    catch (err) {
        return err;
    }
};


/**
 * @post /users/{UserId}/one/{ProductId}
 * @param {Object} data
 * @returns {Object}
 */
async function insertOne(data) {
    try {
        return User.findOne({ where: { id: data.id } }).then(user => {
            return user.addOned(data.ProductId)
        }).catch(err => { return err })
    }
    catch (err) {
        return err;
    }
};

/**
* @post /users/{UserId}/category/{CategoryId}
 * @param {Object} data
 * @returns {Object}
*/
async function insertWatch(data) {
    try {
        return User.findOne({ where: { id: data.id } }).then(user => {
            return user.addCategory(data.CategoryId)
        }).catch(err => { return err })
    }
    catch (err) {
        return err;
    }
};

/**
 * @post /users/{UserId}/proposals/{ProposalId}
 * @param {Object} data
 * @returns {Object}
 */
async function insertAccept(data) {
    try {
        return User.findOne({ where: { id: data.id } }).then(user => {
            return user.addAccepted(data.ProposalId)
        }).catch(err => { return err })
    }
    catch (err) {
        return err;
    }
};


/**
 * @put /users/{id}
  * @param {Object} data
 * @returns {Object}
 */
async function updateUser(data) {
    try {
        let res = await User.update(
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
 * @delete /users/{UserId}/one/{ProductId}
 * @param {Object} data
 * @returns {Object}
 */
async function removeOne(data) {
    try {
        return User.findOne({ where: { id: data.id } }).then(user => {
            return user.removeOned(data.ProductId)
        }).catch(err => { return err })
    }
    catch (err) {
        return err;
    }
};

/**
* @delete /users/{UserId}/category/{CategoryId}
* @param {Object} data
* @returns {Object}
*/
async function removeWatch(data) {
    try {
        return User.findOne({ where: { id: data.id } }).then(user => {
            return user.removeCategory(data.CategoryId)
        }).catch(err => { return err })
    }
    catch (err) {
        return err;
    }
};

/**
 * @delete /users/{UserId}/proposals/{ProposalId}
* @param {number} data
 * @returns {Object}
 */
async function removeAccept(data) {
    try {
        return User.findOne({ where: { id: data.id } }).then(user => {
            return user.removeAccepted(data.ProposalId)
        }).catch(err => { return err })
    }
    catch (err) {
        return err;
    }
};

module.exports = { signup, insertUser, updateUser, insertOne, insertWatch, insertAccept, removeOne, removeAccept, removeWatch };