import React from 'react'
import { AlertItemProps } from '@shared/types/alertTypes'
import AlertItem from '../AlertItem/AlertItem'
import { useAlerts } from '../../context/AlertContext'
import { Flex } from '@chakra-ui/react'

type AlertListProps = {
  items: AlertItemProps[]
}

const AlertList: React.FC<AlertListProps> = () => {
  const { alerts } = useAlerts()

  return (
    <Flex direction="column" gap={4} align="center">
      {alerts.map((alert, index) => (
        <AlertItem key={`${alert.type}-${alert.time}-${index}`} {...alert} />
      ))}
    </Flex>
  )
}

export default AlertList
