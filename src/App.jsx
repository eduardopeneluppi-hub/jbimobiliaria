import { useState } from 'react'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Categories from './components/Categories'
import CtaBanner from './components/CtaBanner'
import ContactPill from './components/ContactPill'

function App() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <div className="min-h-screen">
      <div className="pattern-bg" />
      {!introDone && <Intro onFinish={() => setIntroDone(true)} />}
      {introDone && (
        <>
          <Navbar />
          <Carousel />
          <Categories />
          <CtaBanner />
          <ContactPill />
        </>
      )}
    </div>
  )
}

export default App
