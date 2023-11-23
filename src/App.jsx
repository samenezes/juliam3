

import { useState } from 'react'
import './App.css'
import Temperature from './Temperature'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Temperature/> 
    </>
  )
}

export default App
