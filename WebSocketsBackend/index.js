const express = require("express");
const app = express();
const http = require("http")
const { Server } = require("socket.io")
const cors = require("cors")

app.use(cors());

const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"],
    },
});

let socketsConnected = new Set();

io.on("connection", onConnected)

function onConnected(socket){
    console.log(socket.id)
    socketsConnected.add(socket.id)

    io.emit('clients-total',socketsConnected.size)

    socket.on("disconnect",()=>{
        console.log('Socket Disconnected '+socket.id)
        socketsConnected.delete(socket.id)
        io.emit('clients-total',socketsConnected.size)
    })

    socket.on('message',(data)=>{
        console.log(data)
        io.emit('chat-message',data);
    })

}

server.listen(3001,()=>{
    console.log("Server is running")
})