import React from 'react'

type AlertItemProps = {
  message: string
}

const AlertItem: React.FC<AlertItemProps> = ({ message }) => {
  return <div>{message}</div>
}

export default AlertItem
