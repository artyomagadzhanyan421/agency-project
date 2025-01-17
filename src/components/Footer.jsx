import React from 'react';

// CSS
import "../styles/Footer.css";

// Boxicons
import "boxicons";

function Footer() {
  return (
    <footer>
      <div className='footerOne'>
        <a href="#" style={{ display: "flex", width: "fit-content" }}>
          <img src="/logo.svg" alt="image" />
        </a>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#works">Portfolio</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <span>Our Lisencing</span>
      </div>
      <div className="footerTwo">
        <span>© Webify 2025, All Rights Reserved</span>
      </div>
    </footer>
  )
}

export default Footer