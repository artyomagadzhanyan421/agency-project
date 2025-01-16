import React from 'react';

// CSS
import "../styles/Faq.css";

// Boxicons
import "boxicons";

// Custom Hook
import useFaq from '../hooks/useFaq';

function Faq() {
    const { faqs, toggleFaq } = useFaq();

    return (
        <div className='Block'>
            <div className="blockContent">
                <p className="heading block">
                    Common <span style={{ border: "none", background: "none", color: "#8b8b8b", padding: 0 }}>Questions</span>
                </p>
                <div className="faqs">
                    {faqs.map((faq, index) => (
                        <div className="faq" onClick={() => toggleFaq(index)} key={index}>
                            <div
                                style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                            >
                                <p>{faq.question}</p>
                                <box-icon name={faq.isOpen ? 'minus-circle' : 'plus-circle'} size="24px"></box-icon>
                            </div>
                            <span style={{ display: faq.isOpen ? "flex" : "none" }}>{faq.answer}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Faq;