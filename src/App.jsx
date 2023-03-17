import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Signup from './componnents/Signup'
import Login from './componnents/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    < Signup />
    // <Login />

  )
}

export default App
