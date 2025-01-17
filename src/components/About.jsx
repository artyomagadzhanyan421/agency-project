import React from 'react';

// CSS
import "../styles/About.css";

function About() {
  let span = {
    color: "#8b8b8b"
  }

  return (
    <div className='Block'>
      <div className="about">
        <div className="aboutImg">
          <img src="/about.svg" alt="image" />
        </div>
        <p className='about-desc'><span style={span}>At Webify, we specialize in</span> crafting next-gen web experiences <span style={span}>that blend creativity with cutting-edge technology.</span>
          <br /><br />We deliver tailored solutions <span style={span}>for upgrading your site or creating a new digital platform.</span></p>
        <div className="links aboutSection">
          <a href="#works" className="link">Our Works</a>
        </div>
      </div>
    </div>
  )
}

export default About