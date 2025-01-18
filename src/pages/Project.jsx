import React from 'react';
import { Link, useParams } from 'react-router';
import { usePortfolioProjects } from '../hooks/usePortfolioProjects';
import "../styles/Project.css";
import "boxicons";

function Project() {
  const { id } = useParams();
  const projects = usePortfolioProjects();
  const project = projects.find(proj => proj.id === parseInt(id));

  document.title = `Webiy | ${project.title}`;

  if (!project) {
    return (
      <div className="Hero">
        <p className="heading projectHead">Project Not Found</p>
        <Link to="/" className="back">
          <box-icon name='left-arrow-alt'></box-icon>
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="Hero">
      <div className='blockContent project'>
        <Link to="/" className="back">
          <box-icon name='left-arrow-alt'></box-icon>
          <span>Back to Home</span>
        </Link>
        <p className="heading projectHead">{project.title}</p>
        <p className="projectDesc">{project.projectDesc}</p>
        <div className="projectData">
          <div className="projectTable">
            <div>
              <p style={{ color: "#8b8b8b" }}>Industry</p>
              <p>{project.industry}</p>
            </div>
            <div>
              <p style={{ color: "#8b8b8b" }}>Type of Work</p>
              <p>{project.type}</p>
            </div>
            <div>
              <p style={{ color: "#8b8b8b" }}>Year</p>
              <p>{project.year}</p>
            </div>
          </div>
          <a href={project.preview} target='_blank' className="link">
            <box-icon name='planet' color="white" size="20px"></box-icon>
            <span>Live Preview</span>
          </a>
        </div>
        <div className="projectImage" style={{ background: project.backgroundColor }}>
          <img src={project.banner} className='portfolioBanner' alt={`${project.title} banner`} />
        </div>
      </div>
    </div>
  );
}

export default Project;