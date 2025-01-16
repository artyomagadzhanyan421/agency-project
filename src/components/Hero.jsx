import React from 'react';

// Boxicons
import "boxicons";

// CSS
import "../styles/Hero.css";

function Hero() {
    return (
        <div className='Hero'>
            <div className="sub-head">
                <div className="dot"></div>
                <p style={{ fontWeight: "550" }}>Digital Development Agency</p>
            </div>
            <center><p className="heading">Crafting <span>Next-Gen</span> Web Experiences</p></center>
            <div className="links">
                <a href="https://calendly.com/" target='_blank' className='link'>
                    <box-icon name='phone' color="white" size="20px"></box-icon>
                    <span>Book a Call</span>
                </a>
                <a href="#services" className='link'>Discover Services</a>
            </div>

            <div className="video">
                <video src="/video/hero.mp4" muted autoPlay loop></video>
            </div>
        </div>
    )
}

export default Hero