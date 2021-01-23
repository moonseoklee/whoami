import React, { Component } from "react";
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Main = styled.div`   
   background:red;
    width:100%;
    height:100%;
`;

const CloseButton = styled.div`
  float:right;
`;
const ProjectsModal = (props) => {
    return (
        <>        
          <CloseButton><FontAwesomeIcon icon={faTimes} onClick={props.closeModal} /></CloseButton>
          <div>Project {props.projectIdx}</div>
          <ReactMarkdown># Hello, *world*!</ReactMarkdown>
        </>
    );
};

export default ProjectsModal;