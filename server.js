const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;

const {sequelize} = require('./models')

const cors = require('cors')

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

const corsOptions = {
  origin: process.env.FRONTEND,
  exposedHeaders: ['auth-token']
}

app.use(cors(corsOptions));
app.use('/', indexRouter);
app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);
app.use('/proposals', proposalsRouter);
app.use('/users', usersRouter);
app.use('/usertypes', userTypesRouter);

app.listen(port, () => {
  sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
  console.log("Your app is listening on port http://localhost:" + port);
});
