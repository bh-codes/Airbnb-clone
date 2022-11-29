import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

function App() {
  const lessons = data.map(item => {
    return <Card 
              key={item.id} 
              item={item} //can use {... item} and remove all (.item) in card component but more obscure to figure out what we are passing
              />
  })
  return (
    <body>
      <Navbar />
      <Hero />
      <section className="cards-list">
      {lessons}
      </section>
    </body>
  )
}

export default App;