const moment = require('moment');
const express = require('express');
//import moment from 'moment';
let fecha1 = moment([2021, 8, 21]);
let fecha2 = moment([2018, 2, 10]);
let resultado = fecha1.diff(fecha2, 'days');

const app = express();
const server = app.listen(3000, () => {
  console.log('Escuchando en el puerto 3000');
});
app.get('/', (req, res) => {
  //res.json({ msg: 'text' });
  res.send('Bienvenidos a todos...');
});
app.get('/fyh', (req, res) => {
  res.json({ fyh: moment().format('DD/MM/YYYY HH:mm') });
});
app.get('/visitas', (req, res) => {});
app.get('/test', (req, res) => {});
app.get('/mundo', (req, res) => {
  res.send('<h1>Hola mundo..</h1>');
});