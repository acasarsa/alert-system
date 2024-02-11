import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import { AlertItemProps } from '@shared/types/alertTypes'
import { subscribeToAlerts } from '../services/socketService'

interface AlertCtxType {
  alerts: AlertItemProps[]
}

const AlertCtx = createContext<AlertCtxType | undefined>(undefined)

// custom hook to make consuming the context easier more reusable and safer with error handling
// TODO: likely to use more in v2 to handle updates alerts like resolved in progress
export const useAlerts = (): AlertCtxType => {
  const context = useContext(AlertCtx)
  if (!context) {
    throw new Error('useAlerts must be used within an AlertProvider')
  }
  return context
}

interface AlertProviderProps {
  children: ReactNode
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [alerts, setAlerts] = useState<AlertItemProps[]>([])

  // start listening for events on startup
  useEffect(() => {
    subscribeToAlerts((newAlert: AlertItemProps) => {
      setAlerts((prevAlert) => [newAlert, ...prevAlert])
    })
  }, [])

  return <AlertCtx.Provider value={{ alerts }}>{children}</AlertCtx.Provider>
}
