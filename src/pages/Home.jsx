import React from 'react';

// Components 
import Menu from '../components/Menu';
import Hero from '../components/Hero';
import About from '../components/About';
import Slideshow from '../components/Slideshow';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import Voice from '../components/Voice';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  document.title = `Webiy | Official Website`;

  return (
    <div>
      <Menu />
      <Hero />
      <About />
      <Slideshow />
      <Services />
      <Benefits />
      <Portfolio />
      <Pricing />
      <Faq />
      <Voice />
      <Contact />
      <div className="homeBottom" style={{ background: "#f4f4f4" }}>
        <div className="blockContent">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home