import React, { Component } from "react";
import './select.css'
import styled from 'styled-components'
import doraemon from '../../images/doraemon.png'

const SkillImage = styled.img`   
    width:80px;
    
`;
const Experience = () => {
    return (
        <div className="page">
            
      <a href="#" className="card experience" id="experience">
        <SkillImage src={doraemon}></SkillImage>
        <p>Experience</p>
      </a>
        </div>
    );
};

export default Experience;