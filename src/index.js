const express = require('express');
const formatter = require('./funcoes/minus_maisc.js');
const calculator = require('./funcoes/minimo_maximo.js');

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Oi Mundo Da Web!');
});

app.get('/funcoes/minimo_maximo/:action', (req, res) => {
  const { action } = req.params;
  const input = req.query.input.split(',');

  const result = {
    action,
    input,
    output: calculator(input, action),
  };

  res.send(result);
});

app.post('/funcoes/minus_maisc/:action', (req, res) => {
  const { action } = req.params;
  const { input } = req.body;

  const result = {
    action,
    input,
    output: formatter(input, action),
  };

  res.send(result);
});

app.listen(3000, () => {
  console.log('App listening at http://localhost:3000');
});