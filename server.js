const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const db = require('./db/db')

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const indexRouter = require("./controllers");
const categoriesRouter = require("./controllers/categories");
const productsRouter = require("./controllers/products");
const proposalsRouter = require("./controllers/proposals");
const usersRouter = require("./controllers/users");
const userTypesRouter = require("./controllers/userTypes");

app.use('/', indexRouter);
app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);
app.use('/proposals', proposalsRouter);
app.use('/users', usersRouter);
app.use('/usertypes', userTypesRouter);

app.post('/', function (req, res) {
  console.log(req.body)
  res.send('home')
})

const server = app.listen(port, () => {
  console.log("Your app is listening on port http://localhost:" + port);
});

process.on( 'SIGTERM', function () {

  server.close(function () {
    db.destroy();
    console.log( "Closed out remaining connections.");
  });

  setTimeout( function () {
    console.error("Could not close connections in time, forcefully shutting down");
    process.exit(1); 
  }, 30*1000);

});