import React from 'react';

// CSS
import "../styles/About.css";

function About() {
  return (
    <div className='Block'>
        <div className="about">
            <div className="aboutImg">
                <img src="/about.svg" alt="image" />
            </div>
            <p className='about-desc'><span>At Webify, we specialize in</span> crafting next-gen web experiences <span>that blend creativity with cutting-edge technology.</span>
            <br /><br />We deliver tailored solutions <span>for upgrading your site or creating a new digital platform.</span></p>
            <div className="links aboutSection">
                <a href="#" className="link">Our Works</a>
            </div>
        </div>
    </div>
  )
}

export default About