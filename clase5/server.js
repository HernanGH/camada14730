const http = require('http');
function random(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
    }
http.createServer((req,res)=>{
    const {url,method,headers} = req;
    let body = [];
    req.on ('data',(buffer)=>{
        body.push(buffer)
    })
    req.on('end',()=>{
        body = JSON.parse(Buffer.concat(body).toString())
        if (method == 'POST'){
        res.end(`Hola ${body.nombre}`);
        }else
        res.end(`Metodo invalido...`)

    })
//     let fecha = new Date();
//     let hora = fecha.getHours();
//     let msg = "";
//     if (hora >= 6 && hora <= 12)
//         msg = "buenos dias";
//    else
//         msg = "No definido...";

    // let ob = []
    // for (let i = 0; i < 5;i++)
    //   ob.push({
    //     id : random(1,10),
    //     producto : `Producto A ${random(10,20)}`

    // })

    // JSON.parse("[{},{},{}]")
    //res.end(JSON.stringify(ob))
    



}).listen(3500,function(){
    console.log(this.address().port)
});