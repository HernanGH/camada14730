const mysql = require('mysql');
const _config = {
    
    port:3307,
    host: "127.0.0.1",
    user :"root",
    password:'',
    database:"ecommerce"

}

var pool  = mysql.createPool(_config);
 
const query = (query,params=[]) => new Promise((res,rej)=>{
    pool.getConnection(function(err, connection) {
        if (err) rej(err) 
       
         
        //console.log(mysql.format(query,params))
        connection.query(query, params,function (error, results, fields) {
        
          res(results)
          connection.release();
       
          
          if (error) rej(error)
       
        
        });
      });
})

module.exports = query