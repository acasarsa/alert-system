import { render, screen } from '@testing-library/react'
import AlertList from './AlertList'
import { mockAlerts } from '../../mockData'

test('renders list of alert items', () => {
  render(<AlertList items={mockAlerts} />)

  expect(screen.getAllByRole('listitem')).toHaveLength(mockAlerts.length)
  expect(screen.getByText(/Fire/i)).toBeInTheDocument()
  expect(screen.getByText(/Medical Emergency/i)).toBeInTheDocument()
})
