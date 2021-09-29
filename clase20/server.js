import express from 'express';
const app = express();

app.get('',async (req,res)=>{

    const usuario = {
        nombre:'Pablo',
        apellido:'Ceki',
        email:'pablo@gmail.com',
        usuario:'pablo',
        password:12
    }
    try 
    {
    const _usuario = new model.usuarios(usuario)
    let _ret = await _usuario.save();
    res.send(_ret)
    }catch(err){
     res.send(err)
    }
     
 })
 app.listen(5000,()=>console.log('Listen...'))