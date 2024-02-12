import React from 'react'
import { AlertItemProps } from '@shared/types/alertTypes'
import AlertItem from '../AlertItem/AlertItem'
import { useAlerts } from '../../context/AlertContext'

type AlertListProps = {
  items: AlertItemProps[]
}

const AlertList: React.FC<AlertListProps> = () => {
  const { alerts } = useAlerts()

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      {alerts.map((alert, index) => (
        <AlertItem key={`${alert.type}-${alert.time}-${index}`} {...alert} />
      ))}
    </div>
  )
}

export default AlertList
