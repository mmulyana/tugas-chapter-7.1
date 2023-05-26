import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Textfield from '../Textfield'

describe('test textfield component', () => {
  test('textfield should have label', () => {
    render(<Textfield label='username' />)
    expect(screen.getByText('username')).toBeInTheDocument()
  })

  test('textfield should initialize with empty', () => {
    render(<Textfield label='username' value='' placeholder='username here' />)
    const textfield = screen.getByPlaceholderText( /username here/i )
    expect(textfield.value).toBe('')
  })

  test('textfield should have new value', () => {
    render(<Textfield placeholder='username'/>)
    const textfield = screen.getByPlaceholderText(/username/i)

    fireEvent.change(textfield, { target: { value: 'zenitsu' } })
    expect(textfield.value).toBe('zenitsu')
  })
})
