const db = require("../../db/connection");

const table = "users"

const data = {
    "name": "Camila",
    "email": "mila@gmail.com",
    "type_id": "1",
    "created_at": new Date(),
}

/**
 * @param {Object} data
 * @returns {Promise}
 */
async function insertUser() {
    db(table).insert(data)
        .then((data) => {
            db(table).where("id", data)
                .then((data) => {
                    let res = data;
                    console.log(res);
                    db.destroy();
                    return res;
                })
        })
        .catch((error) => {
            let err = error.sqlMessage
            db.destroy();
            console.log(err);
            return err;
        })
}


/**
 * @param {Number} id
 * @returns {Promise}
 */
function getUserById(id) {
    db(table).insert(data)
    .then((data) => {
        db(table).where("id", data)
            .then((data) => {
                let res = data;
                console.log(res);
                db.destroy();
                return res;
            })
    })
    .catch((error) => {
        let err = error.sqlMessage
        db.destroy();
        console.log(err);
        return err;
    })
}

getUserById(3);

//module.exports = { insertUser , getUserById };