const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})
const index = require('./routes/index')

const port = process.env.PORT || 4001

app.use(index)

let interval

io.on('connection', socket => {
  console.log('New client connected')
  if (interval) {
    clearInterval(interval)
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000)
  socket.on('disconnect', () => {
    console.log('Client disconnected')
    clearInterval(interval)
  })
})

const getApiAndEmit = socket => {
  const response = new Date()
  socket.emit('FromAPI', response)
}

http.listen(port, () => console.log(`Listening on port ${port}`))
