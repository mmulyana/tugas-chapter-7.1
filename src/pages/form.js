import React, { useState } from 'react'
import Textfield from '../component/Textfield'
import { useDispatch } from 'react-redux'
import { setName } from '../redux/reducers/user'

export default function Form() {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  function handleChange(e) {
    const { value, name } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault(0)
    dispatch(setName(form.name))
  }

  return (
    <div className='container mx-auto max-w-[600px]'>
      <form onSubmit={handleSubmit}>
        <Textfield
          value={form.email}
          name='email'
          onChange={handleChange}
          label='Email'
          alt='email textfield'
          type='text'
        />

        <Textfield
          value={form.password}
          name='password'
          onChange={handleChange}
          label='Password'
          alt='password textfield'
          type='text'
        />
      </form>
    </div>
  )
}
