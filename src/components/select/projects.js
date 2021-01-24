import React, { Component } from "react";
import './select.css'
import styled from 'styled-components'


const SkillImage = styled.img`   
    width:80px;
    
`;
const Projects = () => {
    return (
        <div className="page">
            
      <a href="#" className="card projects" id="projects">
        <SkillImage src={process.env.PUBLIC_URL+"/images/doraemon.png"}></SkillImage>
        <p>Projects</p>
      </a>
        </div>
    );
};

export default Projects;