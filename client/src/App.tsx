import React, { useEffect, useState } from 'react'
import './App.css'
import AlertList from './components/AlertList/AlertList'
import AlertForm from './components/AlertForm/AlertForm'
import { useAlerts } from './context/AlertContext'

function App() {
  const { alerts } = useAlerts()
  console.log(alerts)
  const [darkTheme, setDarkTheme] = useState(() =>
    localStorage.getItem('darkTheme')
      ? localStorage.getItem('darkTheme') === 'true'
      : window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkTheme)
    localStorage.setItem('darkTheme', darkTheme.toString())
  }, [darkTheme])

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <div className="App">
      <button onClick={toggleTheme}>Toggle Theme</button>
      <AlertList items={alerts} />
      <AlertForm />
    </div>
  )
}

export default App
