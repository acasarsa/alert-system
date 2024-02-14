import './App.css'
import {
  useColorMode,
  Button,
  Flex,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'
import AlertList from './components/AlertList/AlertList'
import AlertForm from './components/AlertForm/AlertForm'
import { AlertNotificationTag } from './components/base/AlertNotificationTag'
import { useAlerts } from './context/AlertContext'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as ReactRouterLink,
} from 'react-router-dom'

function App() {
  const { alerts } = useAlerts()
  const { colorMode, toggleColorMode } = useColorMode()
  // const navigate = useNavigate()

  return (
    <Router>
      <div className="App">
        <Button m={4} onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
        <Flex
          justifyContent="space-around"
          my={4}
          borderBottom="1px"
          borderColor="pink.200"
          pb={4}
        >
          <ChakraLink as={ReactRouterLink} to="/form">
            Alert Form
          </ChakraLink>
          <Flex>
            <ChakraLink as={ReactRouterLink} to="/alerts" mr={1}>
              Triggered Alerts
            </ChakraLink>
            {alerts.length > 0 && <AlertNotificationTag />}
          </Flex>
        </Flex>
        <Routes>
          <Route path="/alerts" element={<AlertList items={alerts} />} />
          <Route path="/form" element={<AlertForm />} />
          <Route path="/" element={<AlertForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
