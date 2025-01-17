import React from 'react';
import { useState, useEffect } from 'react';

// CSS
import "../styles/Menu.css";

// Boxicons
import "boxicons";

function Menu() {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;

            if (scrollTop + windowHeight >= fullHeight) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={isHidden ? "hidden" : ""}>
            <ul>
                <li>
                    <a href="#home">
                        <span>Home</span>
                        <box-icon name='grid-alt'></box-icon>
                    </a>
                </li>
                <li>
                    <a href="#services">
                        <span>Services</span>
                        <box-icon name='cog'></box-icon>
                    </a>
                </li>
                <li>
                    <a href="#works">
                        <span>Portfolio</span>
                        <box-icon name='folder'></box-icon>
                    </a>
                </li>
                <li>
                    <a href="#pricing">
                        <span>Pricing</span>
                        <box-icon name='dollar-circle'></box-icon>
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        <span>Contact</span>
                        <box-icon name='envelope' ></box-icon>
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Menu