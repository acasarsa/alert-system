import { render, screen } from '@testing-library/react'
import AlertItem from './AlertItem'

test('renders an alert message', () => {
  render(<AlertItem message="Test Alert" />)
  const alertElement = screen.getByText(/test alert/i)

  expect(alertElement).toBeInTheDocument()
})
