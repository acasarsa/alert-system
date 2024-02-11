import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AlertForm from './AlertForm' // Adjust the import path as needed
import { triggerAlert } from 'src/services/socketService'

// Mock the triggerAlert function
jest.mock('src/services/socketService', () => ({
  triggerAlert: jest.fn(),
}))
// TODO: make a custom hook that generates testids
// TODO: first make a util file that defines the testids so you can import them into components and the tests for them
describe('AlertForm', () => {
  it('renders correctly', () => {
    render(<AlertForm />)
    expect(screen.getByTestId(/alertform-select-type/i)).toBeInTheDocument()
    expect(screen.getByTestId(/alertform-input-location/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /send alert/i })
    ).toBeInTheDocument()
  })

  it('allows typing in the input fields', async () => {
    render(<AlertForm />)
    userEvent.type(
      screen.getByTestId(/alertform-input-location/i),
      'Central Park'
    )
    expect(screen.getByTestId(/alertform-input-location/i)).toHaveValue(
      'Central Park'
    )
  })

  it('submits the form with the correct data', async () => {
    render(<AlertForm />)
    // Fill out the form
    userEvent.selectOptions(
      screen.getByTestId(/alertform-select-type/i),
      'option1Value'
    )
    userEvent.type(
      screen.getByTestId(/alertform-input-location/i),
      'Central Park'
    )

    // Submit the form
    fireEvent.submit(screen.getByRole('button', { name: /send alert/i }))

    // Check if the triggerAlert function was called with the correct data
    await waitFor(() => {
      expect(triggerAlert).toHaveBeenCalledWith({
        time: expect.any(Date), // Because this is generated at the time of form submission
        type: 'option1Value',
        location: 'Central Park',
      })
    })
  })
})
