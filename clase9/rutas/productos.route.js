const express = require("express");
const router = express.Router();

router.get('',(req,res)=>{

   res.send("Esta ruta traer todos los productos") 
})
router.get("/delete/:id",(req,res)=>{
    res.send("Esta ruta borrara el producto "+req.params.id);
})
router.get("/update/:id",(req,res)=>{
    res.send("Esta ruta actualizara el producto "+req.params.id);
})

module.exports = router;