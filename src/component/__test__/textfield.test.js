import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Textfield from '../Textfield'
import { useState } from 'react'

const onSubmit = jest.fn()

describe('test textfield component', () => {
  test('textfield must have label', () => {
    render(<Textfield label='username' />)
    expect(screen.getByText('username')).toBeInTheDocument()
  })

  test('textfield must initialize with empty', () => {
    render(<Textfield label='username' value='' placeholder='username here' />)
    const textfield = screen.getByPlaceholderText( /username here/i )
    expect(textfield.value).toBe('')
  })

  test('textfield must have have username after typed', () => {
    const [name, setUser] = useState('')
    render()
  })
})
