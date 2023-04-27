const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Olá, mundo!');
});

app.listen(3000, function() {
  console.log('Servidor iniciado em http://localhost:3000');
});

// colocar no navegador URL http://localhost:3000