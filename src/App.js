import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'
import "./App.css"

const App = () => {
  
  const cards = data.map(item => {
    return (
      <Card
            key={item.id}
            img={item.coverImg}
            raiting={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            openSpots={item.openSpots}
          />
    )
  })


  return (
    <div>
        <Navbar />
        <Hero />
        <section className='cards__list'>
          {cards}
        </section>
    </div>
  )
}

export default App