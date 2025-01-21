import React from 'react';

// CSS
import "../styles/Slideshow.css";

function Slideshow() {
    let purple = {
        background: "linear-gradient(to right, rgb(145, 58, 255, 0.25), transparent)",
        borderLeft: "4px solid #913aff"
    }

    let blue = {
        background: "linear-gradient(to right, rgb(15, 157, 237, 0.25), transparent)",
        borderLeft: "4px solid #0f9ded"
    }

    return (
        <div className='Slideshow'>
            <div className="slideContainer">
                <div className="slideFlex">
                    <p style={purple}>Dynamic</p>
                    <p>Customized</p>
                    <p style={blue}>Efficient</p>
                    <p style={purple}>Versatile</p>
                    <p>Innovative</p>
                    <p style={blue}>Creative</p>
                    <p style={purple}>Dynamic</p>
                    <p>Customized</p>
                    <p style={blue}>Efficient</p>
                    <p style={purple}>Versatile</p>
                    <p>Innovative</p>
                    <p style={blue}>Creative</p>
                </div>
            </div>
            <div className="slideContainer secContainer">
                <div className="slideFlex">
                    <p style={purple}>Collaborative</p>
                    <p>Progressive</p>
                    <p style={blue}>Expert</p>
                    <p style={purple}>Next-Gen</p>
                    <p>Responsive</p>
                    <p style={blue}>Strategic</p>
                    <p style={purple}>Collaborative</p>
                    <p>Progressive</p>
                    <p style={blue}>Expert</p>
                    <p style={purple}>Next-Gen</p>
                    <p>Responsive</p>
                    <p style={blue}>Strategic</p>
                </div>
            </div>
        </div>
    )
}

export default Slideshow