import React, { Component } from "react";
import './select.css'
import styled from 'styled-components'
import project from '../../images/project.png'


const SkillImage = styled.img`   
    width:80px;
    
`;
const Projects = () => {
    return (
        <div className="page">
            
      <a href="/projects" className="card projects" id="projects">
        <SkillImage src={project}></SkillImage>
        
      </a>
        </div>
    );
};

export default Projects;