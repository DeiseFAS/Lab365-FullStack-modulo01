const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Olá, mundo!');
});

app.listen(3000, function() {
  console.log('Servidor iniciado em http://localhost:3000');
});


app.get('/api/nome/:nome', function(req, res) {
  const nome = req.params.nome;
  console.log(`Rota de API criada pelo(a): ${nome}`);
  res.send(`Olá, ${nome}!`);
});
// colocar no navegador URL http://localhost:3000/api/nome/deise


app.post('/api/objeto', function(req, res) {
  const objeto = req.body;
  console.log(`Objeto recebido: ${JSON.stringify(objeto)}`);
  res.json(objeto);
});

// colocar no insomnia URL http://localhost:3000/api/objeto
// objeto que deve ir no corpo da requisição:
// {
//   "nome": "João",
//   "idade": 30,
//   "cidade": "São Paulo"
// }