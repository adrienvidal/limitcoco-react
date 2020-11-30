const app = require('express')()

const server = require('http').createServer(app)
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

// config game
const defaultRoom = 'game-001'
var users = []
var serverState = null

io.on('connection', (socket) => {
  // join room & add new user players
  socket.join(defaultRoom)
  users.push(socket.id)
  io.to(defaultRoom).emit('game:join', socket.id, serverState)
  console.log('A user is connected', socket.id)
  console.log('serverState-connection: ', serverState)

  socket.on('disconnect', () => {
    // remove id from room
    users = users.filter((id) => id !== socket.id)
    io.to(defaultRoom).emit('game:update', serverState)
    console.log('A user is disconnected', socket.id)
  })

  socket.on('game:update', (clientState) => {
    console.log('serverState-update: ', clientState)
    serverState = clientState
    // propagate the update to everyone in the room
    socket.to(defaultRoom).emit('game:update', serverState)
  })
})

// start server
const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
