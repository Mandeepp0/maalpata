import { useState } from 'react'
import Navbar from './components/Navbar'
import WhatInMind from './components/WhatInMind'
import TopRestro from './components/TopRestro'
import PopularRestro from './components/PopularRestro'
import CardShimmer from './components/Card.shimmer'
import Search from './components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <WhatInMind />
      {/* <CardShimmer /> */}
      <TopRestro />
      <PopularRestro />

      <Search />

    </>
  )
}

export default App
