import React from 'react'
import { render, screen } from '@testing-library/react'
import AlertList from './AlertList'
import { useAlerts } from '../../context/AlertContext'

// TODO: horrible usage of test data... this whole option1Value and then checking the text it sucks.
// but it's not that important right now. just super annoying

jest.mock('../../context/AlertContext', () => ({
  useAlerts: () => ({
    alerts: [
      { time: new Date(), type: 'option1Value', location: 'Test Location' },
    ], // Mock data
  }),
}))

test('renders list of alert items with mock context', () => {
  const { alerts } = useAlerts()
  render(<AlertList items={alerts} />)

  expect(screen.getByText(/Puppy needs petting/i)).toBeInTheDocument()
})
