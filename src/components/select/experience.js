import React, { Component } from "react";
import './select.css'
import styled from 'styled-components'


const SkillImage = styled.img`   
    width:80px;
    
`;
const Experience = () => {
    return (
        <div className="page">
            
      <a href="experience" className="card experience" id="experience">
        <SkillImage src={process.env.PUBLIC_URL+"/images/experience.png"}></SkillImage>
        
      </a>
        </div>
    );
};

export default Experience;