import React, { useEffect } from "react";
import './home.css';

import styled, { keyframes } from 'styled-components'
import { bounce, flash } from 'react-animations'
import { Link,useHistory } from "react-router-dom";
import enterkey from '../../images/enterkey.png'
const Bounce = styled.div`
    animation: 3s ${keyframes`${bounce}`} infinite;
`;

const Flash = styled.div`
    animation: 3s ${keyframes`${flash}`} infinite;
    
`;

const Enter = styled.img`    
    width:20px;
`;

function OnKeyPress(key,history) {
    useEffect(() => {
      function onKeyup(e) {        
        if (e.key === key) {
            history.push("/Select");
        }
      }
      window.addEventListener('keyup', onKeyup);
      return () => window.removeEventListener('keyup', onKeyup);
    }, []);
}

function Home() {
    
    const history = useHistory();

    OnKeyPress('Enter',history, () => {
        
      });

    return (
        <div className="page">
            <Bounce>
                <div className="main-banner">
                    문석
            </div>
            </Bounce>
            <div className="main-image">
                <Flash>                    
                    <Link to="/Select">
                        <Enter src={enterkey}></Enter>
                    </Link>                    
                </Flash>
            </div>
        </div>
    );
};

export default Home;
