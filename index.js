var express = require('express')

var app =express()
var socket= require('socket.io')

app.use(express.static('public'))
var server =app.listen(4000,()=>console.log('http:localhost:4000'))

var io=socket(server)
io.on('connection',(socket)=>{
    console.log('socket running ...',socket.id)
     // 获取从客户端发送的数据（chat）
    socket.on('chat',(data)=>{

        io.sockets.emit('chat',data)
    })

    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data);
    })
})

