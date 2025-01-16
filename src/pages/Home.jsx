import React from 'react';

// Components 
import Hero from '../components/Hero';
import About from '../components/About';
import Slideshow from '../components/Slideshow';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import Voice from '../components/Voice';

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Slideshow />
      <Services />
      <Benefits />
      <Portfolio />
      <Pricing />
      <Faq />
      <Voice />
    </div>
  )
}

export default Home