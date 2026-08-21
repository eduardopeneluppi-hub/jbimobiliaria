import { useEffect, useState } from 'react'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import LocationFilter from './components/LocationFilter'
import SearchBox from './components/SearchBox'
import PropertyGrid from './components/PropertyGrid'
import CtaBanner from './components/CtaBanner'
import ContactPill from './components/ContactPill'
import { cities, cityNames } from './data/locations'
import { normalize } from './utils/text'

function App() {
  const [introDone, setIntroDone] = useState(false)
  const [city, setCity] = useState(cityNames[0])
  const [bairro, setBairro] = useState(cities[cityNames[0]][0])
  const [search, setSearch] = useState('')

  function handleChangeCity(newCity) {
    setCity(newCity)
    setBairro(cities[newCity][0])
  }

  useEffect(() => {
    const query = normalize(search.trim())
    if (query.length < 3) return

    for (const c of cityNames) {
      const bairroMatch = cities[c].find((b) => normalize(b).includes(query))
      if (bairroMatch) {
        if (city !== c || bairro !== bairroMatch) {
          setCity(c)
          setBairro(bairroMatch)
        }
        return
      }
    }

    const cityMatch = cityNames.find((c) => normalize(c).includes(query))
    if (cityMatch && cityMatch !== city) {
      setCity(cityMatch)
      setBairro(cities[cityMatch][0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <div className="min-h-screen bg-white">
      {!introDone && <Intro onFinish={() => setIntroDone(true)} />}
      {introDone && (
        <>
          <Navbar />
          <Carousel />
          <LocationFilter
            city={city}
            bairro={bairro}
            onChangeCity={handleChangeCity}
            onChangeBairro={setBairro}
          />
          <SearchBox value={search} onChange={setSearch} />
          <PropertyGrid city={city} bairro={bairro} search={search} />
          <CtaBanner />
          <ContactPill />
        </>
      )}
    </div>
  )
}

export default App
