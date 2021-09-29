const mongoose = require('mongoose');

async function connect () {

    try
     {
    await mongoose.connect('mongodb://localhost:27017/ecommerce',{
        useNewUrlParser:true,
        useUnifiedTopology:true
        })
    
    const Estudiantes = mongoose.model('Estudiantes',{

        nombre:String,
        apellido:String,
        edad:Number,
        dni:String,
        curso:String,
        nota:Number

    })
    const estudiante = new Estudiantes({})
    let _id = await estudiante.save()
     
    }catch(err){
        console.log(err)
    }

}
connect();