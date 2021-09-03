import express from 'express';

import Persona from './lib/clases';

const operaciones = require('./lib/funciones.js');

const yo = new Persona('Pablo','C');

const app = express();
app.get('',(req,res)=>{

res.send({time: operaciones.getTime(),fullname:yo.getFullName()});

})


app.listen(5005,()=>{

	console.log('Servidor escuchando 5005');
})

