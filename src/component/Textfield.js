import React from 'react'

export default function Textfield({ value, name, onChange, label, alt, type, placeholder }) {
  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        alt={alt}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}
