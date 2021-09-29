const { options } = require("./mariaDB");
const express = require('express');
const app = express();
const knex = require("knex")(options);
const cors = require('cors');

app.use(cors({
    origin:'*'
}))
app.use(express.json());
app.use(express.text());
app.get('/',(req,res)=>{

    knex('articulos').select('*').then( data => {

        res.json(data)

    })
})
app.get('/delete/:id',(req,res)=>{

const {id} = req.params;
knex('articulos').where({id}).del().then( _ => res.send('OK'))


})
app.post('/create',(req,res)=>{
   const {articulos} = req.body;

   console.log(req.body)
 //   knex('articulos').insert(articulos).then(_=> res.send('OK'))

})

app.listen(5050,()=>{
    console.log('Listen..')
})