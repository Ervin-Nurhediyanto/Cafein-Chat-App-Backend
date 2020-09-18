require('dotenv').config()
const express = require('express')
const http = require('http')
const socket = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socket(server)
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./src/routes/index')

io.on('connection', socket => {
  console.log('client connect')

  socket.on('welcomeMessage', user => {
    // console.log(user.room)
    // user.room.map(room=>{
    //     socket.join(room)
    // })

    // private message
    // socket.join('user:'+user.id)

    // group
    socket.join(user.room)
    socket.emit('message', 'both : Selamat menggunakan aplikasi chat ' + user.username)
    socket.broadcast.to(user.room).emit('notif', 'both: user join... ' + user.username)
  })

  socket.on('sendMessage', (data) => {
    // const error = true
    // if (error) {
    //   callback('server down')
    // }
    // const time = new Date()
    io.to(data.room).emit('message', data.message)
  })

  socket.on('disconnect', () => {
    console.log('user disconnect')
  })
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/api/v1/', routes)

const PORT = process.env.PORT

app.use('/uploads', express.static('./uploads'))
// app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) })

server.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT + ' 🚀'))
