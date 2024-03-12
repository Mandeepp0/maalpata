import { useState } from 'react'
import Navbar from './components/Navbar'
import WhatInMind from './components/WhatInMind'
import TopRestro from './components/TopRestro'
import PopularRestro from './components/PopularRestro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <WhatInMind />
      <TopRestro />
      <PopularRestro />
    </>
  )
}

export default App
