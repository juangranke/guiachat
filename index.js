var express = require('express')
var app = express()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

// socket -- Cliente -- Uma instancia do cliente que está conectado na sua aplicação.
io.on('connection', (socket) => {

    socket.on('disconnect', () => {
        console.log(socket.id + 'desconectou!')
    })

    socket.on('msg', (data) => {
        io.emit('showmsg', data)
        console.log(data)
    })
})


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

http.listen('3663', () => {
    console.log('App rodando!')
})