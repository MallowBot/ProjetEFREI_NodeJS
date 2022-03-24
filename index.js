//const jwt = require('jsonwebtoken');
require('dotenv').config();

const express = require("express");
const app = express();
const port = 5577;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./database");
require("./models")(app);
require("./controllers")(app);
require("./routes")(app);

app.listen(port, () =>
  console.log("Exemple app listening on port " + port + "")
);
