import { render, screen, act } from '@testing-library/react'
import AlertItem from './AlertItem'
import { mockAlerts } from '../../mockData'

describe('AlertItem', () => {
  it('renders correctly', () => {
    const mockTime = new Date()
    render(<AlertItem time={mockTime} location="Kitchen" type="option3Value" />)

    expect(screen.getByText(/Gas me up/i)).toBeInTheDocument()
    expect(screen.getByText(/Kitchen/i)).toBeInTheDocument()
  })

  it('shows "1s ago" for an alert triggered 1 second ago', () => {
    jest.useFakeTimers()
    const mockTime = new Date(Date.now())
    render(
      <AlertItem time={mockTime} type="option3Value" location="Server Room" />
    )

    // simulate passage of 1 second)
    act(() => jest.advanceTimersByTime(1000))

    expect(screen.getByText(/0m 01s ago/i)).toBeInTheDocument()
    jest.useRealTimers()
  })
})
