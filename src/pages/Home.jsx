import React from 'react';

// Components 
import Hero from '../components/Hero';
import About from '../components/About';
import Slideshow from '../components/Slideshow';
import Services from '../components/Services';
import Benefits from '../components/Benefits';

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Slideshow />
      <Services />
      <Benefits />
    </div>
  )
}

export default Home