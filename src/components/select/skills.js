import React, { Component } from "react";
import './select.css'
import styled from 'styled-components'
import skills from '../../images/skills.png'
const SkillImage = styled.img`   
    width:80px;
    
`;

const Skills = () => {



    return (
        <div className="page">
            <a href="/skills" className="card skills" id="skills">       
                
                    <SkillImage src={skills}></SkillImage>
                
                
            </a>
           
        </div>
    );
};

export default Skills;