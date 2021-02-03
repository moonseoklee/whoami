import React, { Component } from "react";
import './select.css'
import styled from 'styled-components'

const SkillImage = styled.img`   
    width:80px;
    
`;

const Skills = () => {



    return (
        <div className="page">
            <a href="/skills" className="card skills" id="skills">       
                
                    <SkillImage src={process.env.PUBLIC_URL+"/images/skills.png"}></SkillImage>
                
                
            </a>
           
        </div>
    );
};

export default Skills;