import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
  const user = useSelector(s => s.user)
  return <div>{user.name}</div>
}
