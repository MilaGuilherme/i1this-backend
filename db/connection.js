var mysql = require('mysql');
var config = require("../config.json")

const con = mysql.createConnection({
  host: config.HOST,
  user: config.USER,
  password: config.PASSWORD,
  database: config.DB
});

module.exports = con;