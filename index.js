const express = require('express')
const app = express()
const http = require('http')
const expressServer=http.createServer(app)

const {Server}=require('socket.io')
let io =new Server(expressServer)

app.get('/', function (req, res) {
    res.sendFile(__dirname+"/index.html")
})






io.on('connection', function (socket) {



    socket.join('kitchen-room')
    let kitchenSize =io.sockets.adapter.rooms.get('kitchen-room').size
    io.sockets.in('kitchen-room').emit('cooking', 'fried rice ='+kitchenSize)
    io.sockets.in('kitchen-room').emit('Boioling', 'boil rice')

    socket.join('bed-room')
    io.sockets.in('bed-room').emit('sleeping', 'sleeping room')
    io.sockets.in('bed-room').emit('dining', 'dining room')









})
















expressServer.listen(5000,function () {
    console.log('server run 5000')
})