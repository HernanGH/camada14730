const express = require('express');
const app = express();
const faker = require('faker');

function random(min,max){
    return Math.floor(Math.random() * (max -min)) + min;
}
const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

app.use(express.json())
app.use(express.text())

app.get('/test',(req,res)=>{
let o = {
    nombres:faker.name.firstName(),
    apellidos:faker.name.lastName(),
    colores:faker.commerce.color()

}
res.json(o)
})
app.use('/usuarios',require('./routes/usuarios.route'));
app.listen(5030,()=>{
    console.log('Listen')
})