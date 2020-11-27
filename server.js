const app = require('express')()

const server = require('http').createServer(app)
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  console.log('A user is connected', socket.id)

  socket.on('disconnect', () => {
    console.log('A user is disconnected', socket.id)
  })
})

// start server
const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
