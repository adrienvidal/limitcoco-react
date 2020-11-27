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
const state = {
  players: [],
}

io.on('connection', (socket) => {
  console.log('A user is connected', socket.id)

  socket.join(defaultRoom)

  io.to(defaultRoom).emit('game:join', socket.id)

  /*  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
    state.room.users = state.players.filter(id => id !== socket.id);
    socket.to(defaultRoom).emit("room:update", state.room);
  }); */

  /* socket.join(defaultRoom, () => {
    //state.players.push(socket.id)
    console.log(`${socket.id} is joining`)
    io.to(defaultRoom).emit('game:join', socket.id)
  })

  socket.on('game:update', (newGameState, cb) => {
    console.log(socket.id, 'game:update', newGameState)
    state.game = newGameState
    // propagate the update to everyone in the room
    socket.to(defaultRoom).emit('game:update', newGameState)
    cb()
  }) */

  socket.on('disconnect', () => {
    console.log('A user is disconnected', socket.id)
  })
})

// start server
const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
