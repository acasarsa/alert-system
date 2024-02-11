import io from 'socket.io-client'
import { AlertItemProps } from '@shared/types/alertTypes'

const socket = io('http://localhost:4000')

// set up a subscription to "newAlert" events -> listens for this event
export const subscribeToAlerts = (
  callback: (alert: AlertItemProps) => void
): void => {
  socket.on('newAlert', callback)
}

export const triggerAlert = (alertData: AlertItemProps): void => {
  socket.emit('triggerAlert', alertData)
}
