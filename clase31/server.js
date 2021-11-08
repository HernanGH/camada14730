const express = require('express');
const compression = require('compression');

const app = express();
const FRASE = 'Holaquetal';

// app.use(compression());

app.get('/', (req, res) => {
  res.send({ status: 'ok'});
});

app.get('/info', (req, res) => {
  res.send({ status: 'ok'});
});

app.get('/randoms', (req, res) => {
  res.send({ status: 'ok'});
});


app.get('/saludo', (req, res, next) => {
  // const respuesta = [...new Array(1000)].map(() => FRASE).join('');
  res.send(FRASE);
});

app.listen(3000, () => console.log('APP RUNNING...'));