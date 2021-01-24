import React, { Component } from "react";
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const Stack = styled.img`
  src={process.env.PUBLIC_URL+"/images/doraemon.png"}m
  width:25px
`;

const Contents = styled.div`   
  padding:20px;
`;

const Thumbnail = styled.img`
  width:100%;
  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"
`;
const ProjectsModal = (props) => {
    return (
        <>                  
          <Thumbnail src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"></Thumbnail>
          <Contents>
            <Stack src={process.env.PUBLIC_URL+"/images/doraemon.png"}></Stack>
          <div>Project {props.project.id}</div>
          <ReactMarkdown># Hello, *world*!</ReactMarkdown>
          </Contents>
        </>
    );
};

export default ProjectsModal;