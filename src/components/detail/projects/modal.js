import React, { Component } from "react";

import styled from 'styled-components'

const Main = styled.div`   
   background:red;
    width:100%;
    height:100%;
`;

const ProjectsModal = (props) => {
    return (
        <>        
         
          <button onClick={props.closeModal}>close</button>
          <div>Project {props.projectIdx}</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </>
    );
};

export default ProjectsModal;