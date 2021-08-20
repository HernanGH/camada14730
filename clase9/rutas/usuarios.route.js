const express = require("express");
const router = express.Router();

router.get('',(req,res)=>{

   res.send("Esta ruta traer todos los usuarios") 
})

router.get('/buscar',(req,res,next)=>{

   console.log('Primer manejo de la ruta /buscar');
  
})
router.get('/buscar',(req,res)=>{

    res.send(`Se buscara el usuario que comienze con [${req.query.q}]`);

})
router.get("/delete/:id",(req,res)=>{
    res.send("Esta ruta borrara el usuarios "+req.params.id);
})
router.get("/update/:id",(req,res)=>{
    res.send("Esta ruta actualizara el usuario "+req.params.id);
})

module.exports = router;