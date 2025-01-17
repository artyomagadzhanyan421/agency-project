import React from 'react';

// CSS
import "../styles/Menu.css";

// Boxicons
import "boxicons";

function Menu() {
  return (
    <header>
        <ul>
            <li>
                <a href="#home">
                    <span>Home</span>
                    <box-icon name='grid-alt'></box-icon>
                </a>
            </li>
            <li>
                <a href="#services">
                    <span>Services</span>
                    <box-icon name='cog'></box-icon>
                </a>
            </li>
            <li>
                <a href="#works">
                    <span>Portfolio</span>
                    <box-icon name='folder'></box-icon> 
                </a>
            </li>
            <li>
                <a href="#pricing">
                    <span>Pricing</span>
                    <box-icon name='dollar-circle'></box-icon>
                </a>
            </li>
            <li>
                <a href="#contact">
                    <span>Contact</span>
                    <box-icon name='envelope' ></box-icon>
                </a>
            </li>
        </ul>
    </header>
  )
}

export default Menu