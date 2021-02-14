const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = require("./controllers/");
app.use('/api', router);

const listener = app.listen(port, () => {
  console.log("Your app is listening on port " + port);
});