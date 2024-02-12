import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import { AlertProvider } from './context/AlertContext' // Adjust the path as necessary
import App from './App'
import theme from './theme'
import reportWebVitals from './reportWebVitals'

const rootElement = document.getElementById('root')
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <AlertProvider>
          <App />
        </AlertProvider>
      </ChakraProvider>
    </React.StrictMode>
  )
} else {
  console.error('Failed to find the root element')
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
