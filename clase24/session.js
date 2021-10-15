const express = require("express");
const cookie_parser = require("cookie-parser");
const session = require("express-session");
//const redis = require('redis');
//const cliente = redis.createClient();
//const RedisStore = require('connect-redis')(session);
//const FileStore = require('session-file-store')(session)
const MongoStore = require('connect-mongo');
const app = express();
//https://github.com/MicrosoftArchive/redis/releases
app.use(cookie_parser());
app.use(express.json());
app.use(express.text());

app.use(session({
store: MongoStore.create({mongoUrl:'mongodb://localhost/sesiones',ttl:600}),
secret:'jljdfldjlkf',
resave:false,
saveUninitialized:false,
rolling:true,
cookie: {
  maxAge:600000
}
}))

//app.get('/')

app.get('/login',(req,res)=>{
  if (req.session.nombre){
    res.render()

  }else{
    //redirigir 

  }
})
app.post('/login',(req,res)=>{
  const {nombre} = req.body;
  req.session.nombre = no0mbre;
  res.redirect('/');
})
//const getSession = req => req.session.nombre && req.session.nombre || '';
const getSession = req => req.session.nombre? req.session.nombre : '';
app.get('/logout',(req,res)=>{

  const nombre = getSession(req);
  if (nombre)
    req.session.destroy(err => {
      if (!err) res.send('Error')
      else
      res.redirect('/')
    })
})

// app.use (session({
//   store:new RedisStore({
//     host:'localhost',
//     port:6379,
//     client:cliente,
//     ttl:60
//   }),
//   secret: "lkdsjdkljskl",
//   resave: false,
//   saveUninitialized: false,
//   cookie:{
//     maxAge:60000
//   }
// }))
// app.use(
//   session({
//     store: new FileStore({path:'./sesiones2',ttl:300,retries:0}),
    // secret: "lkdsjdkljskl",
    // resave: false,
    // saveUninitialized: false
//   })
// );
app.use(express.json())

let arr = []
app.use((req,res,next)=>{
    
    if (arr)

    return next();
})

//localhost:6060/login?user=xxx&pass=456768

   //User incorrecto  

let count=0;
app.get('/mem-count',(req,res)=>{
    res.send({count:count++})


})

app.post('/login',(req,res)=>{
    const {user,password} = req.body;

})

/*
fetch('/login',{
 method:'POST',
 headers: {
    'content-type':'application/json'

 },
 body:JSON.stringify({user:'amy',pass:'1234})


}).then( r => r.json()).then(e => {
if (e.err == 2)
 console.log('password incorrecto')


})

*/

app.get("/", (req, res) => {
  res.send("Express-session server");
});
app.get("/my-session", (req, res) => {
  const { nombre } = req.query;
  if (req.session.count) {
    req.session.count++;
    res.send(`${nombre} el números de visitas es ${req.session.count}`);
  } else {
    req.session.count = 1;
    req.session.mivariable = 'testing';
    req.session['mivariable2'] = 1234;
    res.send(`Welcome to my server ${nombre}`);
  }
});
app.get("/destroy", (req, res) => {
  req.session.destroy((err) => {
    if (!err) res.send("Ok");
    else res.send({ error: err });
  });
});
app.get('/info',(req,res)=>{
    console.log(req.session)
    res.json(req.session)
})

app.listen(6060, () => {
  console.log("Ready session server...");
});
