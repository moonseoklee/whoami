import React, { Component } from "react";
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

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
`;


const ProjectsModal = (props) => {
  
  
  const StackList = () => {
    const stacks = []
    let sts = props.project.stack;
    sts = sts.slice(2,-2)
    sts = sts.split("','")
   
    
    for(let i=0;i<sts.length;i++){
      stacks.push(<Stack src={process.env.PUBLIC_URL + "/images/"+sts[i]+".png"}></Stack>);
  }

  return stacks;
  }
  
  return (
    <>
      {/*<Thumbnail src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"></Thumbnail>*/}
      <Contents>
      <Title>{props.project.title}</Title>
        <StackDiv>
        <StackList></StackList>
        </StackDiv>
        
        <ReactMarkdown># Hello, *world*!</ReactMarkdown>
      </Contents>
    </>
  );
};

export default ProjectsModal;