const express = require('express');
const cookie_parser = require('cookie-parser');

const app = express();
app.use(cookie_parser())

app.get('/set-cookie',(req,res)=>{ /// /set-cookie?nombre=xxx&valor=ccc&tiempo=xxx

    const {tiempo,nombre,valor} = req.query;
    if (nombre && valor ){
      if (tiempo) 
        res.cookie(nombre,valor,{maxAge: parseInt(tiempo,10)}).send({process:'OK'})
        else 
        res.cookie(nombre,valor).send({process:'OK'})

    }else 
    res.send({error: 'Error-cookie falta nombre/valor'})

})
// localhost:6060/set-cookie?nombre=test&valor=coder&tiempo=30000
app.get('/clear-cookie',(req,res)=>{
const {nombre} = req.query;
if (nombre)
    res.clearCookie(nombre).send({process:'OK'})
else 
    res.send({error:'clear-cookie'})
})


app.get('/get-cookie',(req,res)=>{

    res.send(req.cookies);
})

app.listen(6060,()=>{

    console.log('Ready')
})