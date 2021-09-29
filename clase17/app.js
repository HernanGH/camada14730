// const { options } = require("./mariaDB");
const {options } = require("./sqlite3");

const knex = require("knex")(options);

const articulos = [
  {
    nombre: "azucar",
    codigo: "123456",
    precio: 65.3,
    stock: 20,
  },
  {
    nombre: "yerba",
    codigo: "123456",
    precio: 100.3,
    stock: 50,
  },
  {
    nombre: "harina",
    codigo: "123456",
    precio: 23.5,
    stock: 100,
  },
];

(async()=>{

try
{

    await knex.schema.dropTableIfExists("articulos").createTable("articulos", (table) => {
        table.increments("id").notNullable(); // create table (id int not null auto_increment, primary key(id))
        table.string("nombre", 15);
        table.string("codigo", 10);
        table.float("precio");
        table.integer("stock");
      })
    await knex('articulos').insert(articulos).then(_=>console.log('Articulos creados'))

}catch(err){
console.log(err)
}finally{
knex.destroy();
}

 })()


// knex.schema
//   .dropTableIfExists("articulos")
//   .createTable("articulos", (table) => {
//     table.increments("id").notNullable(); // create table (id int not null auto_increment, primary key(id))
//     table.string("nombre", 15);
//     table.string("codigo", 10);
//     table.float("precio");
//     table.integer("stock");
//   })
//   .then(
//     () => {

//         knex('articulos').insert(articulos).then(_=>console.log('Articulos creados'))
//     },
//     (err) => console.log(err),
//     () => knex.destroy()
//   );


//knex('marcas').insert(marcas).then(_=> console.log('Listo'))

//select * from marcas
// select id from marcas
//knex('marcas').select('id').then (data => console.log(data))
// select * from marcas where id = 1 or id = 2

// let marca = {name:'audi',price:333}
// let query = "select * from marcas where id = ?"
// let query = "insert into marcas set = ?"
// db.query(query,[marca])

// knex('marcas').select('*').whereRaw("id = ?",[1]).then(
//  (data)=>console.log(data),
//  (err) => console.log(err),
//  ()=>console.log('fin...')

// )
// knex('cars').insert(cars).then (_ => console.log('ready'))
// // knex("cars")
// //   .select("name", "id")
// //   .whereIn("id", [1, 3])
// //   .then((d) => console.log(d));




