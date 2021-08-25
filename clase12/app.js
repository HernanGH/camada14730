const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mensajes = [];

app.use(express.static('./public'));

app.get('/',(req,res)=>{

    res.send('index.html');

})
app.get('/mensajes',(req,res)=>{

    res.json(mensajes);
})

io.on('connection',(socket)=>{
    console.log('Cliente conectado: '+ socket.id);
    socket.emit('message',{mensajes})
    socket.on('hello',(data)=>{
        console.log(data);
    })
    socket.on('keyup',(data)=>{
        console.log(data);
       io.emit("user_keyup",{...data,id:socket.id}) //Object.assign(data,{id:socket.id})
       mensajes.push({message:data.value,id:socket.id})
    })

})

http.listen(5050, ()=>{
    console.log('Init WS');
})



