const db = require('./db');
const fs = require('fs');
const sql = fs.readFileSync(__dirname + '\\queries\\create.sql').toString();

db.raw(sql).then((data) => {
    console.log(data[0][0]);
    db.destroy()
})
