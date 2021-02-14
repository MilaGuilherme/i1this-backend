const db = require('./connection');
const fs = require('fs');
const sql = fs.readFileSync(__dirname + '\\queries\\create.sql').toString();

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

