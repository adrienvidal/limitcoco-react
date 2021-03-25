const express = require('express')
const path = require('path')
const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

// config game
const defaultRoom = 'game-001'
const state = {
  game: null,
  room: {
    users: [],
  },
}

io.on('connection', (socket) => {
  // join room & add new user players

  // room update
  socket.join(defaultRoom)
  state.room.users.push(socket.id)
  io.to(defaultRoom).emit('client:room:update', state.room)

  console.log('A user is connected', socket.id)
  console.log('state: ', state)

  // disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id)

    // room&game update
    state.room.users = state.room.users.filter((id) => id !== socket.id)
    state.game = null
    socket.to(defaultRoom).emit('client:room:update', state.room)
    socket.to(defaultRoom).emit('client:game:update', state.game)
  })

  // join game
  socket.on('server:game:join', (callback) => {
    console.log(socket.id, 'server:game:join')
    callback(state.game)
  })

  // game update
  socket.on('server:game:update', (newGameState, callback) => {
    console.log(socket.id, 'server:game:update', newGameState)
    state.game = newGameState
    // propagate the update to everyone in the room
    socket.to(defaultRoom).emit('client:game:update', newGameState)
    callback()
  })
})

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', () =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
}

// start server
const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
