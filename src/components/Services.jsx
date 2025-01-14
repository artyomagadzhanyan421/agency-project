import React from 'react';

// CSS
import "../styles/Services.css";

function Services() {
  let span = {
    border: "none",
    background: "none",
    padding: 0,
    color: "#8b8b8b"
  }

  return (
    <div className='Block'>
        <div className="blockContent">
            <p className="heading">Modern Excellence, <span style={span}>Delivered</span></p>
        </div>
    </div>
  )
}

export default Services