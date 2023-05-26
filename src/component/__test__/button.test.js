import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '../button'

describe('test button component', () => {
  test('button should have text', () => {
    render(<Button>Open</Button>)
    expect(screen.getByText('Open')).toBeInTheDocument()
  })
})
