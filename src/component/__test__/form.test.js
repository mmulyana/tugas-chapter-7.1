import { fireEvent, render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from '../../pages/form'
import { Provider } from 'react-redux'
import store from '../../redux'

describe('integrate test form page', () => {
  test('must have 2 textfield', async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    )
    const textfieldList = await screen.findAllByRole('textbox')
    expect(textfieldList).toHaveLength(2)
    cleanup()
  })

  test('texfield should empty when click submit', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    )

    const textfieldEmail = screen.getByPlaceholderText(/type email here/i)
    const textfieldPassword = screen.getByPlaceholderText(/type password here/i)
    const button = screen.getByText('Click')

    fireEvent.change(textfieldEmail, { target: { value: 'mulyan@mail.com' } })
    fireEvent.change(textfieldPassword, { target: { value: '12345678' } })
    fireEvent.click(button)

    expect(textfieldEmail.value).toBe('')
    expect(textfieldPassword.value).toBe('')
  })
})
