import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './pages/form'
import Home from './pages/home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={<Form />} />
        <Route path='/home' Component={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
