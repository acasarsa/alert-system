import React from 'react'
import { AlertItemProps } from '@shared/types/alertTypes'

const AlertItem: React.FC<AlertItemProps> = ({ time, location, type }) => {
  const [elapsedTime, setElapsedTime] = React.useState('')

  React.useEffect(() => {
    const updateElapsedTime = () => {
      const now = new Date()
      const diffInSeconds = Math.round((now.getTime() - time.getTime()) / 1000)
      const minutes = Math.floor(diffInSeconds / 60)
      const seconds = diffInSeconds % 60

      // Format the time to ensure two digits for seconds
      setElapsedTime(`${minutes}m ${seconds.toString().padStart(2, '0')}s ago`)
    }

    // Update every second
    const intervalId = setInterval(updateElapsedTime, 1000)

    // Initial update
    updateElapsedTime()

    // Cleanup interval on unmount
    return () => clearInterval(intervalId)
  }, [time])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'spaceBetween',
      }}
    >
      <h4 role="listitem">Alert Type: {type}</h4>
      <p>Alert Triggered: {elapsedTime}</p>
      <p>Location: {location}</p>
    </div>
  )
}

export default AlertItem
