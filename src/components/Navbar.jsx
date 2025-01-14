import React from 'react';
import { Link } from 'react-router';

//CSS 
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
        <Link to="/" style={{display: "flex"}}>
            <img src="/logo.svg" alt="logo" style={{width: 100}} />
        </Link>
    </nav>
  )
}

export default Navbar