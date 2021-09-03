const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mensajes = [

{
    author:'Juan',
    text:'Hola como estan?'
},
{
    author:'Pablo',
    text:'Hola gente'
},
{
    author:'Pedro',
    text:'Que hay de nuevo?'
}

];
const usuarios = [
{
    id:'ssdsdsd',
    name:'Jose'
},
{
    id:'11xgsh56',
    name:'Maria'
},
]

app.use(express.static('./public'));

app.get('/',(req,res)=>{

    res.send('index.html');

})
app.get('/mensajes',(req,res)=>{

    res.json(mensajes);
})

io.on('connection',(socket)=>{
    console.log('Cliente conectado: '+ socket.id);
    console.log('Client addr: '+ socket.handshake.address);
    socket.emit('messages',mensajes)
    socket.to(socket.id).emit('messages',nmes)
    socket.on('hello',(data)=>{
      
        console.log(data);
    })

    
    socket.on('keyup',(data)=>{
        console.log(data);
       io.emit("user_keyup",{...data,id:socket.id}) //Object.assign(data,{id:socket.id})
       
       mensajes.push({message:data.value,id:socket.id})
    })

    socket.on('messages',(data)=>{

    })

    socket.on('new-message',(data)=>{
        console.log(data);
        mensajes.push(data)
        io.emit("messages",mensajes);
    })

})

http.listen(5050, ()=>{
    console.log('Init WS');
})



