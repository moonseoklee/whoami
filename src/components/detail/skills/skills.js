import React, { Component } from "react";

import styled,{keyframes} from 'styled-components'
import { pulse } from 'react-animations'
import './line.css'
const SkillBucket = styled.div`
width:90%;
height:90%;
  justify-content:center;
  align-items:center;
  display:flex;
  flex-wrap:wrap;
`;

const Image = styled.img`  
padding: .25rem;
line-height: 1;
border-radius: 4px;
cursor: pointer;
animation: 3s ${keyframes`${pulse}`} infinite;
margin-right:20px;
height:200px;
width:200px;
display:flex;
`;

const LineDiv = styled.div`
  display:flex;
`;

const Skills = () => {
    return (
        <div className="page">
           <SkillBucket>
                  <LineDiv>
                 <Image src={process.env.PUBLIC_URL+"images/python.png"}></Image>
                 <Image src={process.env.PUBLIC_URL+"images/java.png"}></Image>
                 <Image src={process.env.PUBLIC_URL+"images/javascript.png"}></Image>                              
                 </LineDiv>
                 <LineDiv>                 
                 <Image src={process.env.PUBLIC_URL+"images/react.png"}></Image>
                 <Image src={process.env.PUBLIC_URL+"images/springboot.png"}></Image>
                 <Image src={process.env.PUBLIC_URL+"images/django.png"}></Image>
                 <Image src={process.env.PUBLIC_URL+"images/nodejs.png"}></Image>
                 </LineDiv>
                 <LineDiv>                 
                 <Image src={process.env.PUBLIC_URL+"images/mysql.png"}></Image>
                 <Image src={process.env.PUBLIC_URL+"images/mongodb.png"}></Image>
                 <Image src={process.env.PUBLIC_URL+"images/postgre.png"}></Image>
                
                 </LineDiv>
          </SkillBucket>       
          
        </div>
    );
};

export default Skills;