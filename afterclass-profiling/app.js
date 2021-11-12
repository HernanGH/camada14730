var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/info', (req, res) => {
  console.log('/info');
  res.send({ date: Date.now(), message: ' status ok'});
});

app.get('/randoms', (req, res) => {
  console.log('/randoms');
  res.send({ date: Date.now(), message: ' status ok'});
});

module.exports = app;
