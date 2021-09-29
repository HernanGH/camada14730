const mysql = require('mysql');
const query = require('./raw')
const _config = {
    
    port:3307,
    host: "127.0.0.1",
    user :"root",
    password:'',
    database:"test"

}

query('select * from cars').then(data => console.log(data))
//const conn = mysql.createConnection(_config)

// var pool  = mysql.createPool(_config);
 
// pool.getConnection(function(err, connection) {
//   if (err) throw err; 
 
 
//   connection.query('SELECT * from cars', function (error, results, fields) {
  
//     console.log(results)
//     connection.release();
 
    
//     if (error) throw error;
 
  
//   });
// });
// conn.connect(function(err){
//     if (err) throw err;
//     conn.query("SELECT * FROM cars", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//       });
// })

