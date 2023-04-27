require('dotenv').config();

const express = require("express");

const connection = require("./src/connection/db.js");
const  router  = require("./src/routes/routes.js");

const app = express();
app.use(express.json());
app.use(router);
connection.sync();

app.listen(3333, () => console.log("Server On"));

/* {
    "name": "Nome do Local",
    "telefone": "(48) 9999-8888",
    "opening hours": "Segunda a Sexta: 9h às 16h",
    "description": "Descrição do Local",
    "latitude": 235505,
    "longitude": 466333
    }
    {
        "fullName":"Carmem Miranda",
        "email":"saladadefrutas@nacabeça.com",
        "username":"Carmezita",
        "password":"ticoticola"
    }
    
    */
