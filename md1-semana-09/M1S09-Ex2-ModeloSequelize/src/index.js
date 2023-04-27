require('dotenv').config();

const express = require("express");

const connection = require("./src/connection/db.js");
const  router  = require("./src/routes/routes.js");

const app = express();
app.use(express.json());
app.use(router);
connection.sync();

app.listen(3333, () => console.log("Server On"));

