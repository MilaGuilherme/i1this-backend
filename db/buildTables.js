const  connection =require('./connection');
const fs = require('fs');
const sql = fs.readFileSync(__dirname+'\\queries\\create.sql').toString();

connection.raw(sql).then((data)=> {
    console.log(data[0][0]);
    connection.destroy();
});