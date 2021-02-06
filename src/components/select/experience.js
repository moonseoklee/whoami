import React, { Component } from "react";
import './select.css'
import styled from 'styled-components'
import experience from '../../images/experience.png'


const SkillImage = styled.img`   
    width:80px;
    
`;
const Experience = () => {
    return (
        <div className="page">
            
      <a href="/experience" className="card experience" id="experience">
        <SkillImage src={experience}></SkillImage>
        
      </a>
        </div>
    );
};

export default Experience;