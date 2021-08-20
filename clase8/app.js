import express from "express";
import fs from "fs";
import cors from "cors";

let app = express();
let frase = "hola como estas todos";

app.use(cors({origin:"*"}));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));


app.get('/api/getFrase',(req,res)=>{

  res.send(frase);

})
app.get('/api/getLetra/:num',(req,res)=>{
  
    if (!isNaN(req.params.num))
    {
      let num = parseInt(req.params.num,10);
      if (num > 0 && num <= frase.length-1)
        res.send(frase[req.params.num-1]);
        else
        res.send('Fuera de rango...')
    }
    else
      res.send('Esto no es un numero')
})

app.get('/api/getPalabra/:num',(req,res)=>{
res.send(frase.split(' ')[req.params.num-1])
})

app.post('/api/misdatos',(req,res)=>{


  res.json(req.body);

})

app.post('/api/miform',(req,res)=>{
  console.log(req.body);
  res.send('Hello form...');
})
app.post('/api/guardar',(req,res)=>{

    let arr = frase.split(' ');
    arr.push(req.body.palabra)
    frase = arr.join(' ');
    res.send(frase);
    // frase = [...frase.split(' '),req.body.palabra].join(' ');


})



app.put('/api/update/:num',(req,res)=>{
  let arr = frase.split(' ');
  arr[req.params.num -1] = req.body.palabra;
  frase = arr.join(' ');
  res.send(frase);
})
app.get('/api/delete/:num',(req,res)=>{
  let arr = frase.split(' ');
  arr.splice(req.params.num-1,1);
  frase = arr.join(' ');
  res.send(frase);
})

app.get('/',(req,res)=>{
  res.send('Api de ejemplo')
})
// app.post('/test',(req,res)=>{

//   res.send('Hola a todos!!!')

// })
// app.get('/usuarios/:id',(req,res)=>{ //http://localhost:5005/usuarios/2 ----->info del usuario

// })
// app.post('/usuarios/:id',(req,res)=>{}) //http://localhost:5005/usuarios/2 --------> {datos....}

app.listen(5005,()=>{

 console.log('Servidor escuchando en el puerto 5005!') 
})