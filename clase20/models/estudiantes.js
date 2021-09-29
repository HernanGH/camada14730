import mongoose, { Mongoose } from 'mongoose';

const usuariosCollection = 'Estudiantes';

const UsuarioScheme = new mongoose.Schema({

    nombre:String,
    apellido:String,
    edad:Number,
    dni:{type:String,unique:true},
    nota:Number


})

export const estudiantes = mongoose.model(usuariosCollection,UsuarioScheme)