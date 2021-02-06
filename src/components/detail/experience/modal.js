import React, { Component } from "react";
import ReactMarkdown from 'react-markdown'

import './modal.css'
import styled from 'styled-components'
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
import github from '../../../images/github.png'
const dict = {"mongodb":mongodb,"python":python,"java":java,"java":java,"javascript":javascript,"react":react,"springboot":springboot,
"django":django,"nodejs":nodejs,"mysql":mysql,"postgre":postgre}
const StackDiv = styled.div`  
  display:flex;
  margin-bottom:50px;
`;

const Stack = styled.img`  
  height:25px;
  margin-right:10px;
`;

const Contents = styled.div`   
  padding:20px;
`;

const Thumbnail = styled.img`
  width:100%;
  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"
`;

const Title = styled.h1`
  font-size:40px;
  display:flex;
`;




const ProjectsModal = (props) => {
  const GitLink = () => {
    console.log(props.project)
    if (props.project.git) {
      return  <a href="https://github.com/Joeyryanbridges" target="_blank">
      <Stack src={github} style={{marginTop:"10px",cursor:"pointer"}} onClick=""></Stack>
      </a>;
    }
    return <></>;
  }
  
  const StackList = () => {
    const stacks = []
    let sts = props.project.stack;
    sts = sts.slice(2,-2)
    sts = sts.split("','")
   
    
    for(let i=0;i<sts.length;i++){
      stacks.push(<Stack src={dict[sts[i]]}></Stack>);
  }

  return stacks;
  }
  const divStyle = { 
    display: props.displayModal ? 'block' : 'none'
};
function closeModal(e) {
  e.stopPropagation()
  props.closeModal()
}
  return (
     
    
     <div 
     className="modal"
     onClick={ closeModal }
     style={divStyle} >
         <div 
             className="modal-content"
             onClick={ e => e.stopPropagation() } >
             <span 
                 className="close"
                 onClick={ closeModal }>&times;
             </span>
             <Contents>
      <Title>{props.project.title}
        <GitLink></GitLink>
        </Title>
      
        <StackDiv>
        <StackList></StackList>
        </StackDiv>
        
        <ReactMarkdown>{props.project.markdown_content}</ReactMarkdown>
      </Contents>
          </div>
      
   </div>
  );
};

export default ProjectsModal;