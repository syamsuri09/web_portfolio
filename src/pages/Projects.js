import React from 'react';
import { projectsData } from '../components/Data';
import '../App.css';

const TechnologyButton = ({ tech, index }) => {
  return (
    <span key={`${index}_${tech.name}`} className="techSpan">
      <img src={tech.imageUrl} alt={tech.name} className="techImg" />
      {tech.name}
    </span>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <div className="card-container">
      <div className="codeView">
        <h4 className="card-title">{project.title}</h4>
        <a
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="codeLink"
        >
          View Code
        </a>
      </div>
      <p className="card-desc">{project.description}</p>
      <div className="techdiv">
        {project.techUsed.map((tech, techIndex) => (
          <TechnologyButton
            key={`${index}_${techIndex}`}
            tech={tech}
            index={techIndex}
          />
        ))}
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <div id="projects">
      <div className="project-card">
        <h1 className="card-heading">My Projects</h1>
        <div className="card-wrap">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
