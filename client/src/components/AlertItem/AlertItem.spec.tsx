import { render, screen } from '@testing-library/react'
import AlertItem from './AlertItem'

describe('AlertItem', () => {
  it('renders correctly', () => {
    const mockTime = new Date()
    render(<AlertItem time={mockTime} location="Kitchen" type="option3Value" />)

    expect(screen.getByText(/Gas me up/i)).toBeInTheDocument()
    expect(screen.getByText(/Kitchen/i)).toBeInTheDocument()
  })

  it('updates time ago when time passes', () => {
    jest.useFakeTimers()
    const oneHourAgo = new Date(Date.now() - 3601 * 1000) // Subtract 3600 seconds (1 hour) from the current time

    render(
      <AlertItem time={oneHourAgo} type="option3Value" location="Server Room" />
    )

    // Check that the displayed text correctly shows "1h 0m 1s ago"
    expect(screen.getByText(/1h 0m 1s ago/i)).toBeInTheDocument()

    jest.useRealTimers()
  })
})
