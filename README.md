# i1this-backend

### Install the dependencies with
`npm install`

### By default the API uses MySQL 5.7.31 and Knex
Create an .env file on the root of the folder and add the following code:

	NODE_ENV=development
	PORT=3001
	HOST= localhost,
	USER=root,
	PASSWORD=,

change the info to match your database
### Run on console
#### To build the database:
`node db/refreshDB.js`

#### To migrate tables:
`knex migrate:latest`

#### To seed tables:
`knex seed:run`
