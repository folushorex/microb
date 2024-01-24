import React from 'react';
import Hero from "../Components/Hero";
import Featured from "../Components/Featured";
import "../Styles/Hero.css"


function Home() {
  return (
        <div className="Home">
      <Hero/>
      <Featured/>
      </div>
      

  )
}

export default Home