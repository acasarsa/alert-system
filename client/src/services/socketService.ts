import io from 'socket.io-client'

const socket = io('http://your_server_address')

const triggerAlert = (message: string) => {
  socket.emit('triggerAlert', { message })
}

const onAlert = (callback: (alert: any) => void) => {
  socket.on('newAlert', callback)
}

export { triggerAlert, onAlert }
