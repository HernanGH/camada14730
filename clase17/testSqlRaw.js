const db = require('./raw');

//knew('articulos').select('*').then(data => console.log(data))

db('select * from articulos').then(data => console.log(data))