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
const serverState = {
  users: [],
  gameState: null,
}

io.on('connection', (socket) => {
  // join room & add new user players
  socket.join(defaultRoom)
  serverState.users.push(socket.id)
  io.to(defaultRoom).emit('game:join', serverState, socket.id)
  console.log('A user is connected', socket.id)

  socket.on('disconnect', () => {
    // remove id from room
    serverState.users = serverState.users.filter((id) => id !== socket.id)
    io.to(defaultRoom).emit('game:update', serverState)
    console.log('A user is disconnected', socket.id)
  })

  /*
  socket.on('game:update', (newGameState, cb) => {
    console.log(socket.id, 'game:update', newGameState)
    state.game = newGameState
    // propagate the update to everyone in the room
    socket.to(defaultRoom).emit('game:update', newGameState)
    cb()
  }) */
})

// start server
const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
