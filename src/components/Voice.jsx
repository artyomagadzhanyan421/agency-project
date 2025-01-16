import React from "react";
import useFeedbacks from "../hooks/useFeedbacks";

// CSS
import "../styles/Voice.css";

function Voice() {
    let spanStyle = {
        border: "none",
        background: "none",
        color: "#8b8b8b",
        padding: 0,
    };

    const { feedbacks } = useFeedbacks();

    return (
        <div className="Block">
            <div className="blockContent">
                <div className="headingFlex">
                    <p className="heading block">
                        <span style={spanStyle}>Voices from</span> Our Clients
                    </p>
                    <div className="links">
                        <a href="#contact" className="link" rel="noopener noreferrer">
                            <box-icon name="phone" color="white" size="20px"></box-icon>
                            <span>Contact Us</span>
                        </a>
                    </div>
                </div>
                <div className="voices">
                    {feedbacks.map((feedback, index) => (
                        <div className="voice" key={index}>
                            <div>
                                <div className="client">
                                    <span>{feedback.name}</span>
                                    {feedback.message.map((msg, i) => (
                                        <p key={i}>{msg}</p>
                                    ))}
                                </div>
                                <br />
                                <div className="webify">
                                    <span style={{ marginLeft: "auto" }}>Webify</span>
                                    <p>{feedback.response}</p>
                                </div>
                            </div>
                            <div className="clientName">
                                <img src={feedback.image} alt={feedback.name} />
                                <p>
                                    {feedback.name}{" "}
                                    <span style={{ color: "#8b8b8b" }}>{feedback.role}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Voice;