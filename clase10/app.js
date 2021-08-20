const express = require("express");
const hanblebars = require("express-handlebars");

// const fs = require("fs");

const app = express();

const PORT = 5010;

// app.engine("cte",function(fp,ops,callback){
//   fs.readFile(fp,function(err,content){
//         if(err) return callback(new Error(err))
//         let rendered = content.toString("utf-8");
//         for (let i in ops.datos)
//         rendered = rendered.replace(`^^${i}$$`,ops.datos[i])
//         return callback(null,rendered);
//     })

// })
app.engine("hbs",hanblebars(
{
    extname:".hbs",
    defaultLayout:"index.hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir:__dirname + "/views/partials"
}
))

app.set("views","./views");
app.set("view engine","hbs");
app.use(express.static("public"));
app.get('/',(req,res)=>{
 
 
    res.render("main",{productos:[
        {
            name:'Azucar',
            precio:34
        },
        {
            name:'Fideos',
            precio:50
        },
        {
            name:'Yerba Mate',
            precio:500
        }

    ]})

    
})

app.listen(PORT,()=>{
console.log("Nuestro server esta en el puerto " + PORT)

})
