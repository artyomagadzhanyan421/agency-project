import React from 'react';
import { Link } from 'react-router';
import { usePortfolioProjects } from '../hooks/usePortfolioProjects';

// CSS
import "../styles/Portfolio.css";

// Boxicons
import "boxicons";

function Portfolio() {
    const projects = usePortfolioProjects();

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
                        Showcase <span style={spanStyle}>of Excellence</span>
                    </p>
                    <p className='headingDesc'>Explore our portfolio of innovative digital solutions, showcasing our creativity and expertise in delivering exceptional results.</p>
                </div>
                <div className="portfolioGrid">
                    {projects.map(project => (
                        <Link to="/" className="project" key={project.id}>
                            <div className="projectImage">
                                <img src={project.banner} className='portfolioBanner' alt={`${project.title} banner`} />
                                <img src={project.background} className='portfolioBg' alt={`${project.title} background`} />
                            </div>
                            <div className="portfolioFlex">
                                <p className='projectTitle'>{project.title}</p>
                                <div>
                                    <span style={{ fontWeight: 500 }}>View Project</span>
                                    <box-icon name='right-top-arrow-circle' size="21px"></box-icon>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;