import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

function App() {
  const lessons = data.map(item => {
    return <Card img={item.coverImg} location={item.location} rating={item.stats.rating} reviewCount={item.stats.reviewCount} title={item.title} price={item.price}/>
  })
  return (
    <body>
      <Navbar />
      <Hero />
      {lessons}
    </body>
  )
}

export default App;