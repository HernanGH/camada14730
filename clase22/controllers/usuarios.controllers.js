
const {get} = require('../generadores/usuarios');
const {getFecha,nextId,getIndex} = require('../utils');
let usuarios=[];

const generar  = (cant) => {
let arr = [];

for (let i = 0; i < cant; i++){

let usuario = get();
 usuario.id = i + 1;
 usuario.fecha = getFecha();
 arr.push(usuario)

}
usuarios = arr;
return arr;



}
const getUsuarioById = (id) => {
    return usuarios[getIndex(id,usuarios)];
}
const agregar = ()=> {
    let usuario = get();
    usuario.id = nextId(usuarios);
    usuario.fecha = getFecha();
    usuarios.push(usuario)

    return usuarios;
}


const getUsuarios = ()=> usuarios;

module.exports = {
    generar,
    getUsuarios,
    agregar,
    getUsuarioById
}