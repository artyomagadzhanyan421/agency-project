import React from 'react';

// CSS
import "../styles/Services.css";

// Hooks
import useServices from "../hooks/useServices";

function Services() {
  const { services } = useServices(); 

  let spanStyle = {
    border: "none",
    background: "none",
    color: "#8b8b8b",
    padding: 0,
  };

  return (
    <div className="Block">
      <div className="blockContent">
        <p className="heading block">Digital Excellence, <span style={spanStyle}>Delivered</span></p>
        <div className="services">
          <div className="serviceFlex">
            <p>Our Services</p>
            <span>{services.length} services</span>
          </div>
          <div className="servicesGrid">
            {services.map((service) => (
              <a href="https://www.lemonsqueezy.com/" target='_blank' key={service.id} className="service">
                <img src={service.image} alt={service.title} />
                <div className="serviceText">
                  <p className="serviceTtitle">{service.title}</p>
                  <p className="serviceDesc">{service.description}</p>
                  <div className="serviceLink">
                    <span>Get Started</span>
                    <box-icon name="right-top-arrow-circle" color="white" size="21px"></box-icon>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="blockFlex">
          <p>Need custom solution for your needs?</p>
          <div className="links">
            <a href="https://calendly.com/" target="_blank" className="link">
              <box-icon name="phone" color="white" size="20px"></box-icon>
              <span>Book a Call</span>
            </a>
            <a href="#" className="link">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;