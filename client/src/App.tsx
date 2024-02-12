import './App.css'
import { useColorMode, Button } from '@chakra-ui/react'
import AlertList from './components/AlertList/AlertList'
import AlertForm from './components/AlertForm/AlertForm'
import { useAlerts } from './context/AlertContext'

function App() {
  const { alerts } = useAlerts()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className="App">
      <Button m={4} onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      <AlertList items={alerts} />
      <AlertForm />
    </div>
  )
}

export default App
