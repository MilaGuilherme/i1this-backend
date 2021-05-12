# i1this-backend

### Install the dependencies with
`npm install`

### By default the API uses MySQL 5.7.31 and Knex

#### DB info:  
	user:"root",
	password:"",

### Run on console
#### To build the database:
`node db/refreshDB.js`

#### To migrate tables:
`knex migrate:latest`

#### To seed tables:
`knex seed:run`
