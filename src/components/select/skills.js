import React, { Component } from "react";
import './select.css'
import styled from 'styled-components'
import doraemon from '../../images/doraemon.png'
const SkillImage = styled.img`   
    width:80px;
    
`;

const Skills = () => {



    return (
        <div className="page">
            <a href="#" className="card skills" id="skills">       
                
                    <SkillImage src={doraemon}></SkillImage>
                
                <p>Skills</p>
            </a>
           
        </div>
    );
};

export default Skills;