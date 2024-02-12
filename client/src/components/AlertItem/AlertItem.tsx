import React from 'react'
import { AlertItemProps } from '@shared/types/alertTypes'

const AlertItem: React.FC<AlertItemProps> = ({ time, location, type }) => {
  const [elapsedTime, setElapsedTime] = React.useState('')

  React.useEffect(() => {
    const updateElapsedTime = () => {
      if (time == null) {
        setElapsedTime('0s')
        return
      }
      const alertCreateTime = new Date(time)
      const now = new Date()
      const diffInSeconds = Math.round(
        (now.getTime() - alertCreateTime.getTime()) / 1000
      )

      const hours = Math.floor(diffInSeconds / 3600)
      const minutes = Math.floor((diffInSeconds % 3600) / 60)
      const seconds = diffInSeconds % 60

      // done this way for readability
      setElapsedTime(
        `
        ${hours > 0 ? `${hours}h ${minutes}m ${seconds}s ago` : ''}
        ${minutes > 0 ? `${minutes}m ` : ''}
        ${seconds}s ago`
          .trim()
          .replace(/\s+/g, ' ')
      )
    }

    // Update every second
    const intervalId = setInterval(updateElapsedTime, 1000)

    // Initial update
    updateElapsedTime()

    // Cleanup interval on unmount
    return () => clearInterval(intervalId)
  }, [time])

  const alertTypeDisplayNames: AlertTypeDisplayNameMapping = {
    option1Value: 'Puppy needs petting',
    option2Value: 'Clean up in aisle 7',
    option3Value: 'Gas me up',
  }

  type AlertTypeValue = 'option1Value' | 'option2Value' | 'option3Value'

  type AlertTypeDisplayNameMapping = {
    [key in AlertTypeValue]: string
  } & {
    [key: string]: string | undefined
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'spaceBetween',
      }}
    >
      <h4 data-testid="alertitem-type">
        Alert Type: {alertTypeDisplayNames[type]}
      </h4>
      <p>Alert Triggered: {elapsedTime}</p>
      <p>Location: {location}</p>
    </div>
  )
}

export default AlertItem
