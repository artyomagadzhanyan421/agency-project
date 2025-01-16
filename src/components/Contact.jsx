import React from 'react';

// Contact
import "../styles/Contact.css";

// Boxicons
import "boxicons";

function Contact() {
    let spanStyle = {
        border: "none",
        background: "none",
        color: "#8b8b8b",
        padding: 0,
    };

    return (
        <div className='Block' id='contact' style={{ background: "#f4f4f4" }}>
            <div className="blockContent">
                <div className="headingFlex">
                    <p className="heading block">
                        Become <span style={spanStyle}>Connected</span>
                    </p>
                    <p className='headingDesc'>We're here to answer your questions and discuss how we can help you achieve your goals.</p>
                </div>
                <div className="contact">
                    <form>
                        <p className="formHead">We look forward to connecting with you!</p>
                        <br />
                        <input type="text" placeholder='Full name' required />
                        <input type="email" placeholder='Email' required />
                        <textarea placeholder='How can we help you?' required></textarea>
                        <button type='submit' className='link'>Send a message</button>
                    </form>
                    <div className="contactImage">
                        <img src="/contact.webp" alt="image" />
                        <div className='contactBlock'>
                            <p className="formHead" style={{ color: "white" }}>Book a time to discuss your next project</p>
                            <a href="https://calendly.com/" target='_blank' className='link'>
                                <box-icon name='phone' color="black" size="20px"></box-icon>
                                <span>Book a Call</span>
                            </a>
                        </div>
                        <div className="sub-head contactSub">
                            <div className="dot"></div>
                            <p style={{ fontWeight: "550" }}>Available for New Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact