import React from 'react'

function Contact() {
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
                        Become <span style={spanStyle}>Connected</span>
                    </p>
                    <p className='headingDesc'>We're here to answer your questions and discuss how we can help you achieve your goals.</p>
                </div>
            </div>
        </div>
    )
}

export default Contact