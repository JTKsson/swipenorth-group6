'use client'

// import { Inter } from "next/font/google";
// import PlayingCards from "../components/playingCards/playingCards";
import CheckboxList from '../components/filterSortIconComp'

const options = ['IT', 'Sjukvård', 'Skola', 'Transport']
const salary = ['25 0000 - 30 000', '31 000 - 36 000']
const remote = ['Ja', 'Nej', 'Delvis']
const profession = ['Läkare','Lärare', 'Sjuksköterska', 'Utvecklare', 'Taxichafför']

const MyPage = () => {
  const handleFilter = (checkedOptions) => {
  }

  return (
    <>
    <div>
      <h1>Branch</h1>
      <CheckboxList options={options} onFilter={handleFilter} />
    </div>
    <div>
      <h1>Yrke</h1>
      <CheckboxList options={profession} onFilter={handleFilter} />
    </div>
    <div>
      <h1>Lönspann</h1>
      <CheckboxList options={salary} onFilter={handleFilter}/>
    </div>
    <div>
      <h1>Möjlighet att jobba på distans</h1>
      <CheckboxList options={remote} onFilter={handleFilter} />
    </div>
    <button onClick={handleFilter}>Filtrera</button>
    </>
  )
}

export default MyPage