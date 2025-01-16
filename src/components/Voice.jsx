import React from 'react'

function Voice() {
    let spanStyle = {
        border: "none",
        background: "none",
        color: "#8b8b8b",
        padding: 0,
    };

    return (
        <div className='Block'>
            <div className="blockContent">
                <div className="headingFlex">
                    <p className="heading block">
                        <span style={spanStyle}>Voices from</span> Our Clients
                    </p>
                    <div className="links">
                        <a href="https://calendly.com/" target="_blank" className="link" rel="noopener noreferrer">
                            <box-icon name="phone" color="white" size="20px"></box-icon>
                            <span>Contact Us</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Voice