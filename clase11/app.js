const express = require('express');
const app = express();




// app.get("/datos",(req,res)=>{

//     let {min,nivel,max,titulo} = req.query;
//     console.log(req.query);
//     if(true){
//         nivel = ((nivel-min) * 100) / (max-min)
//         console.log(parseFloat(nivel).toFixed(2))
//         res.render("index",{mensaje:titulo,min,max,nivel})
//     }else
//      res.send("Fuera de rango...")

// })

app.use(express.urlencoded());
app.use(express.json())

const lista = [];
app.get("/form",(req,res)=>{

    res.render("form",{lista})
})
app.post("/datos",(req,res)=>{

lista.push({...req.body})

res.render("form",{lista})
//res.json(lista)
})
app.get("/hello",(req,res)=>{
    let {min,nivel,max,titulo} = req.query;

    res.render("index",
    {
        lista:[
            {
                name:'Bs As',
                temp:35
            },
            {
                name:'Tucuman',
                temp:50
            },
            {
                name:'cordoba',
                temp:38

            }
        ],
        min,
        max,
        mensaje:"Hello!!!",
        status:true,
        title:"Mi primer ejemplo usando EJS"
    })
})
app.use(express.static(__dirname + '/public'));
app.set("views","./views");
//app.set("view engine","pug");
app.set("view engine","ejs");
app.listen(3030, () => {
  console.log('Listen');
});
