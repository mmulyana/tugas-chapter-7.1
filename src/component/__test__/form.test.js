import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Form from '../../pages/form'
import { Provider } from 'react-redux'
import store from '../../redux'

const onSubmit = jest.fn()

describe('integrate test form page', () => {
  test('must have 2 textfield', async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    )
    const textfieldList = await screen.findAllByRole('textbox')
    expect(textfieldList).toHaveLength(2)
  })
})
