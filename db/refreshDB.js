const db = require('knex')({
    client: 'mysql',
    connection: {
        host: "localhost",
        user: "root",
        password: "",
        database: "i1this",
        multipleStatements: true
    }
});
const fs = require('fs');
const sql = fs.readFileSync(__dirname + '\\queries\\db.sql').toString();

db.raw(sql).then((data) => {
    console.log(data[0][0]);
    db.destroy()
})
