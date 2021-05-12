
exports.up = function(knex) {
    const db = knex;
    const fs = require('fs');
    const sqlfile = require('../../db/queries/create.sql')
    const sql = fs.readFileSync(sqlfile).toString();
    
    db.raw(sql).then((data) => {
        console.log(data[0][0]);
        db("user_types").insert({ "name": "Admin" })
        .then(() => {
            db("user_types")
            .then((data) => {
                console.log(data);
                db.destroy()})
        })
    });
};

exports.down = function(knex) {
  
};
