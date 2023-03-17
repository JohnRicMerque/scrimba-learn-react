import React from 'react'
import NavBar from './NavBar'
import Preface from './Preface'
import Card from './Card'
import Data from './data'

export default function App() {

  const cards = Data.map(item => {
    return <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
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
