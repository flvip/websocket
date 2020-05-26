// 实现和服务端的连接
var socket = io.connect('http://localhost:4000');


var output = document.querySelector('#output'),
feedback = document.querySelector('#feedback'),
handle = document.querySelector('#handle'),
message = document.querySelector('#message'),
send = document.querySelector('#send')

//监听客户端输入
message.addEventListener('keypress',()=>{
    socket.emit('typing',handle.value)
})

 // 实现客户端向服务器传输数据
send.addEventListener('click',()=>{
    socket.emit('chat',{
        handle:handle.value,
        message:message.value
    })
    message.value ='';
   
})
socket.on('chat',(data)=>{
    feedback.innerHTML ='';
    output.innerHTML+=`<p><strong>${data.handle}:${data.message}</strong></p>`
})
socket.on('typing',(data)=>{
    feedback.innerHTML=`<p><em>${data}正在输入...</em></p>`
})