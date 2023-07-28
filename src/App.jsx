import { Navbar, Hero } from "./components"
import { useState } from "react"
import { hero } from "./constants"

const App = () => {
  const [toggle, setToggle] = useState(false)
  const [selectedList, setSelectedList] = useState('')
  const [adultsCount, setAdultsCount] = useState(0)
  const [childrenCount, setChildrenCount] = useState(0)
  const totalGuests = adultsCount + childrenCount
  const [filteredHero, setFilteredHero] = useState(hero);
  const handleSearch = () => {
    if( selectedList !== '' && totalGuests >= 0 ) {
      const filtered = hero.filter((her) => her.location === selectedList && her.beds >= totalGuests)
      setFilteredHero(filtered)
    } else {
      setFilteredHero(hero.slice(0,9))
    }
  };
  return (
    <div className="w-full overflow-hidden max-w-full flex flex-col items-center">
      <Navbar toggle={toggle} setToggle={setToggle} selectedList={selectedList} setSelectedList={setSelectedList} adultsCount={adultsCount} setAdultsCount={setAdultsCount} childrenCount={childrenCount} setChildrenCount={setChildrenCount} totalGuests={totalGuests} handleSearch={handleSearch} />
      <Hero toggle={toggle} selectedList={selectedList} setSelectedList={setSelectedList} totalGuests={totalGuests} filteredHero={filteredHero} />
    </div>
  )
}

export default App
