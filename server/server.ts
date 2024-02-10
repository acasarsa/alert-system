import * as http from 'http'
import { Server, Socket } from 'socket.io'
import { AlertItemProps } from '@shared/types/alertItemTypes'

const httpServer = http.createServer()
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket: Socket) => {
  console.log('A user connected')

  socket.on('triggerAlert', (data: AlertItemProps) => {
    io.emit('newAlert', data) // Broadcast to all clients
  })

  socket.on('disconnect', () => {
    console.log('A user disconnected')
  })
})

const PORT = process.env.PORT || 4000
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`))
// test
