import React from 'react'
import { AlertItemProps } from '../AlertItem/AlertItem'
import AlertItem from '../AlertItem/AlertItem'

type AlertListProps = {
  items: AlertItemProps[]
}

const AlertList: React.FC<AlertListProps> = ({ items }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      {items.map((item, index) => (
        <AlertItem key={index} {...item} />
      ))}
    </div>
  )
}

export default AlertList
