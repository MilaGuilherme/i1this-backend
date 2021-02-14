const config = require("../config.json")

const con = {
  client: 'mysql',
  connection: {
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DB,
    multipleStatements: true
  },
  pool: { min: 0, max: 7 }
};

const db = require('knex')(con);

module.exports = db;