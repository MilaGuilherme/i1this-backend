const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;

const express = require('express');
const app = express();

const categoriesRouter = require("./controllers/categories");

app.use('/categories', categoriesRouter);

app.get('/', function (req, res) {
  res.send(app._router.stack)
})


const listener = app.listen(port, () => {
  console.log("Your app is listening on port " + port);
});