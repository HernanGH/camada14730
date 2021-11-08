const express = require('express');
const compression = require('compression');
const logger = require('./logger');

const app = express();
const FRASE = 'Holaquetal';

app.use(compression());

app.get('/', (req, res) => {
  logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: response success`);
  res.send({ status: 'ok'});
});

app.get('/info', (req, res) => {
  logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: response success`);
  res.send({ status: 'ok'});
});

app.get('/randoms', (req, res) => {
  logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: response success`);
  res.send({ status: 'ok'});
});


app.get('/saludo', (req, res, next) => {
  // const respuesta = [...new Array(1000)].map(() => FRASE).join('');
  logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: response success`);
  res.send(FRASE);
});

app.listen(3000, () => console.log('APP RUNNING...'));