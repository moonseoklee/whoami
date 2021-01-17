import React, { Component } from "react";
import './select.css'
import styled from 'styled-components'
import doraemon from '../../images/doraemon.png'

const SkillImage = styled.img`   
    width:80px;
    
`;
const Projects = () => {
    return (
        <div className="page">
            
      <a href="#" className="card projects" id="projects">
        <SkillImage src={doraemon}></SkillImage>
        <p>Projects</p>
      </a>
        </div>
    );
};

export default Projects;