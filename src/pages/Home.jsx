import React from 'react';

// Components 
import Hero from '../components/Hero';
import About from '../components/About';
import Slideshow from '../components/Slideshow';
import Services from '../components/Services';

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Slideshow />
      <Services />
    </div>
  )
}

export default Home