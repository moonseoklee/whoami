import React, { Component } from "react";
import './select.css'
import styled from 'styled-components'


const SkillImage = styled.img`   
    width:80px;
    
`;
const Experience = () => {
    return (
        <div className="page">
            
      <a href="#" className="card experience" id="experience">
        <SkillImage src={process.env.PUBLIC_URL+"/images/doraemon.png"}></SkillImage>
        <p>Experience</p>
      </a>
        </div>
    );
};

export default Experience;