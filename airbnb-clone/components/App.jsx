import React from 'react'
import NavBar from './NavBar'
import Preface from './Preface'
import Card from './Card'
import Data from './data'

export default function App() {

  const cards = Data.map(item => {
    return <Card
        key={item.id}
        item={item}
    />
  })

  return (
    <div className="App">
      <NavBar />
      <Preface />
      <section className='cards-list'>
        {cards}
      </section>
      
    </div>
  )
}
