import React, { Component } from "react";

import styled,{keyframes} from 'styled-components'
import { pulse } from 'react-animations'
import './line.css'
import mongodb from '../../../images/mongodb.png'
import python from '../../../images/python.png'
import java from '../../../images/java.png'
import javascript from '../../../images/javascript.png'
import react from '../../../images/react.png'
import springboot from '../../../images/springboot.png'
import django from '../../../images/django.png'
import nodejs from '../../../images/nodejs.png'
import mysql from '../../../images/mysql.png'
import postgre from '../../../images/postgre.png'




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
          I can
           <SkillBucket>
                  <LineDiv>
                 <Image src={python}></Image>
                 <Image src={java}></Image>
                 <Image src={javascript}></Image>
                 </LineDiv>
                 <LineDiv>                 
                 <Image src={react}></Image>
                 <Image src={springboot}></Image>
                 <Image src={django}></Image>
                 <Image src={nodejs}></Image>
                 </LineDiv>
                 <LineDiv>                 
                 <Image src={mysql}></Image>
                 <Image src={mongodb}></Image>
                 <Image src={postgre}></Image>

                
                 </LineDiv>
          </SkillBucket>       
          
        </div>
    );
};

export default Skills;