import { useState } from 'react'
import Navbar from './components/Navbar'
import WhatInMind from './components/WhatInMind'
import TopRestro from './components/TopRestro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <WhatInMind />
      <TopRestro />
    </>
  )
}

export default App
