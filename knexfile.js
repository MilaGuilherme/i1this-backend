module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host:"localhost",
      user:"root",
      password:"",
      database : "i1this",
      multipleStatements: true
    },
    migrations: {
      directory: __dirname+'/knex/migrations'
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host:"localhost",
      user:"root",
      password:"",
      database : "i1this",
      multipleStatements: true
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname+'/knex/migrations'
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  },
  production: {
    client: 'mysql',
    connection: {
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DB,
      multipleStatements: true
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname+'/knex/migrations'
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  }

};
