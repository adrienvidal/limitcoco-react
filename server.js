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
    users: [],
  },
}

io.on('connection', (socket) => {
  console.log('A user is connected', socket.id)

  socket.on('disconnect', () => {
    console.log('A user is disconnected', socket.id)
  })

  // for now, everyone joins the same room
  socket.join(defaultRoom, () => {
    state.room.users.push(socket.id)
  })

  /* socket.on('my-event', (event) => {
    console.log('my-event', event)
  }) */
})

// start server
const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
