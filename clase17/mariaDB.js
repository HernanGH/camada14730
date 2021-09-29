
const options = {
    client:"mysql",
    connection:{
        port:3307,
        host: "127.0.0.1",
        user :"root",
        password:'',
        database:"ecommerce"
    },
    pool:{min:0,max:7}
}
module.exports = {
   options
}