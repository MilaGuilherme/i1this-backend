const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const db = require('./db/db')

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const categoriesRouter = require("./controllers/categories");

app.use('/categories', categoriesRouter);

app.post('/', function (req, res) {
  console.log(req.body)
  res.send('home')
})

const server = app.listen(port, () => {
  console.log("Your app is listening on port " + port);
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