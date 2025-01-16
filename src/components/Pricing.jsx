import React from "react";
import usePricing from "../hooks/usePricing";

// CSS
import "../styles/Pricing.css";

// Boxicons
import "boxicons";

function Pricing() {
    const pricingData = usePricing();

    return (
        <div className="Block" style={{ background: "#f4f4f4" }}>
            <div className="blockContent">
                <div className="headingFlex">
                    <p className="heading block">
                        Flexible <span style={{ border: "none", background: "none", color: "#8b8b8b", padding: 0 }}>Pricing Plans</span>
                    </p>
                    <p className="headingDesc">
                        Discover our flexible pricing plans designed to fit your budget, providing clear and competitive rates for all our services.
                    </p>
                </div>

                <div className="pricing">
                    {pricingData.map((pkg, index) => (
                        <div key={index} className="package" style={pkg.style.main}>
                            <div className="packageMain" style={pkg.style.main2}>
                                <div className="packageTitle">
                                    <p style={pkg.style.title}>{pkg.name}</p>
                                    <span style={pkg.style.subtitle}>{pkg.subtitle}</span>
                                </div>
                                <p className="packageDesc" style={pkg.style.description}>
                                    <span style={{ color: "#8b8b8b" }}>{pkg.description.split(" ")[0]}</span>{" "}
                                    {pkg.description.slice(pkg.description.indexOf(" ") + 1)}
                                </p>
                                <div className="price" style={pkg.style.price}>
                                    <span>$</span>
                                    <p>{pkg.price.toLocaleString()}</p>
                                    <span>{pkg.duration}</span>
                                </div>
                                <div className="links priceLinks">
                                    <a href={pkg.link} target="_blank" rel="noopener noreferrer" className="link">
                                        <box-icon name="rocket" color={pkg.style.buttonIconColor} size="20px"></box-icon>
                                        <span>Get Started</span>
                                    </a>
                                </div>
                            </div>
                            <div className="priceList">
                                {pkg.features.map((group, idx) => (
                                    <ul key={idx}>
                                        {group.map((feature, featureIdx) => (
                                            <li key={featureIdx}>
                                                <div className="listDot"></div>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="blockFlex">
                    <p>Need custom solution for your needs?</p>
                    <div className="links">
                        <a href="https://calendly.com/" target="_blank" className="link">
                            <box-icon name="phone" color="white" size="20px"></box-icon>
                            <span>Book a Call</span>
                        </a>
                        <a href="#" className="link">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;