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
  game: null,
  room: {
    users: []
  }
};

io.on('connection', (socket) => {
  // join room & add new user players
  socket.join(defaultRoom)
  state.room.users.push(socket.id);
  io.to(defaultRoom).emit("room:update", state.room);
  console.log('A user is connected', socket.id)
  console.log('state: ', state)

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
    state.room.users = state.room.users.filter(id => id !== socket.id);
    socket.to(defaultRoom).emit("room:update", state.room);
  });

  socket.on("game:join", callback => {
    console.log(socket.id, "game:join");
    callback(state.game);
  });

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
