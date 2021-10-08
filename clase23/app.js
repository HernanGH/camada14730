//import { normalize, schema } from 'normalizr';

let input = require('./input.json');
let blogs = require('./blogposts.json');
let holding = require('./holding');
let empresas = require('./empresa');
let escuela = require('./escuela');
let {normalize,schema} = require('normalizr');

// Define a users schema
const user = new schema.Entity('users');

// Define your comments schema
const comment = new schema.Entity('comments', {
  commenter: user
});

// Define your article
const article = new schema.Entity('articles', {
  author: user,
  comments: [comment]
});
const autor = new schema.Entity('autores');
const comentario = new schema.Entity('comentarios');
const post = new schema.Entity('posts',{
    autor,
    comentarios:[comentario]
})

const empleadoSchema = new schema.Entity('empleados');



const empresaSchema = new schema.Entity('empresa',{
   
   gerente:empleadoSchema,
   encargado:empleadoSchema,
   empleados:empleadoSchema

})


const empleado = new schema.Entity('empleado');

const _empresaSchema = new schema.Entity('empresas',{
  gerente:empleado,
  encargado:empleado,
  empleados:[empleado]
})

const holdingSchema = new schema.Entity('holding',{
  empresas:[_empresaSchema]
})



const normalizedData = normalize(holding, holdingSchema);


console.log(JSON.stringify(normalizedData))