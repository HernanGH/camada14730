const SECRET_KEY = "jdls8@#~lflf";
const jwt = require('jsonwebtoken');
const express = require('express');
let usuarios = [];

const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/login',(req,res)=>{
res.send('login')

})

const generarToken = (user) => jwt.sign({user},SECRET_KEY)
app.get('/info',(req,res)=>{
res.json(usuarios)

})

const auth = (req,res,next) => {
    const token = req.headers["authorization"];
    if (!token){
        res.send('Error...')
    }
    try
    {
    const decoded = jwt.verify(token.split(" ")[1],SECRET_KEY);
    req.user = decoded;
    next();
    }catch(err){
        res.send('Token no valido...')
    }

}
app.post('/register',(req,res)=>{
    let {user} = req.body;
    let usuario = usuarios.find(u => u.user == user);
    if (!usuario)
    {
        const token = generarToken(user)
        usuarios.push(req.body)
        res.header("x-auth-token",token).send({
            usuario
        })
    }else
     res.send('Error to register')
})

app.get('/datos',auth,(req,res)=>{
    res.send('Ok ....')
})
app.post('/login',(req,res)=>{

  let {user,pass} = req.body;
  let usuario = usuarios.find(u => u.user == user);
  if (usuario)
  {
    let success = usuario.user == user && usuario.pass == pass;
    if (success)
     {
        usuario.count = 0
        const token = generarToken(usuario);
        res.header("x-auth-token",token).send({
            usuario
        })
     }else
     res.send('Error login');

  }
  else
  res.send('No existe')

})
app.listen(9199,()=>{
    console.log('listening....')
   
   })
   
