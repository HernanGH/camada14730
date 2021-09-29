const express = require('express');
const router = express.Router();
const {get} = require('../generadores/usuarios');
const usuario = require('../controllers/usuarios.controllers');


router.get('/',(req,res)=>{
res.json(get());

})
router.get('/test',(req,res)=>{
    res.send('Testing...')
})
router.get('/generar/:cant?',(req,res)=>{
let cant = req.params.cant || 50;
res.json(usuario.generar(cant));
})
router.get('/add',(req,res)=>{
 res.send(usuario.agregar())
})
router.get('/ver',(req,res)=>{
    res.json(usuario.getUsuarios());
})
router.get('/:id?',(req,res)=>{
const {id} = req.params;
res.json(usuario.getUsuarioById(parseInt(id,10)))
})

module.exports = router;
