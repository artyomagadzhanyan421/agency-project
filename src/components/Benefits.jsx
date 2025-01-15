import React from "react";
import useBenefits from "../hooks/useBenefits";

// CSS
import "../styles/Benefits.css";

// Boxicons
import "boxicons";

function Benefits() {
  const { benefits } = useBenefits();

  let spanStyle = {
    border: "none",
    background: "none",
    color: "#8b8b8b",
    padding: 0,
  };

  let weight = {
    fontWeight: 500,
  };

  let benefitIconStyle = {
    display: "flex",
    padding: "5px",
    borderRadius: "10px",
    border: "1px solid #eee",
  };

  const groupedBenefits = benefits.reduce(
    (acc, benefit) => {
      if (benefit.type === "positive") acc.positive.push(benefit);
      else acc.negative.push(benefit);
      return acc;
    },
    { positive: [], negative: [] }
  );

  const slideImages = [
    { group: "slidesOne", images: ["/benefits/b1.svg", "/benefits/b2.svg", "/benefits/b3.svg", "/benefits/b4.svg", "/benefits/b5.svg"] },
    { group: "slidesTwo", images: ["/benefits/b6.svg", "/benefits/b7.svg", "/benefits/b8.svg", "/benefits/b9.svg", "/benefits/b10.svg"] },
  ];

  return (
    <div className="Block">
      <div className="blockContent">
        <div className="headingFlex">
          <p className="heading block">
            <span style={spanStyle}>Benefits that</span> Drive Success
          </p>
          <div className="links">
            <a href="https://calendly.com/" target="_blank" className="link" rel="noopener noreferrer">
              <box-icon name="phone" color="white" size="20px"></box-icon>
              <span>Book a Call</span>
            </a>
          </div>
        </div>
        
        <div className="benefits">
          <div className="benefit">
            <div className="benefitTitle">
              <img src="/logo.svg" style={{ width: 86 }} alt="Your Agency" />
            </div>
            {groupedBenefits.positive.map((benefit) => (
              <div className="benefitRow" key={benefit.id}>
                <div className="benefitIcon" style={benefitIconStyle}>
                  <box-icon name={benefit.icon} size="18px"></box-icon>
                </div>
                <span style={weight}>{benefit.title}</span>
              </div>
            ))}
          </div>
          <div className="benefit two">
            <div className="benefitTitle">
              <p style={{ fontWeight: 550 }}>Other Development Agencies</p>
            </div>
            {groupedBenefits.negative.map((benefit) => (
              <div className="benefitRow" key={benefit.id}>
                <div className="benefitIcon" style={benefitIconStyle}>
                  <box-icon name={benefit.icon} size="18px"></box-icon>
                </div>
                <span style={weight}>{benefit.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="benefitSlides">
          {slideImages.map((slideGroup, index) => (
            <div className={`benefitFlexImages ${slideGroup.group}`} key={index}>
              {slideGroup.images.map((imageSrc, idx) => (
                <div className="benefitSlide" key={idx}>
                  <img src={imageSrc} alt={`Slide ${index + 1} Image ${idx + 1}`} />
                </div>
              ))}
            </div>
          ))}
          {slideImages.map((slideGroup, index) => (
            <div className={`benefitFlexImages ${slideGroup.group}`} key={index}>
              {slideGroup.images.map((imageSrc, idx) => (
                <div className="benefitSlide" key={idx}>
                  <img src={imageSrc} alt={`Slide ${index + 1} Image ${idx + 1}`} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Benefits;