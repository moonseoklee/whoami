import React, { useEffect, useRef } from "react";


import './select.css'
import Skills from './skills'
import Projects from './projects'
import { Link, useHistory } from "react-router-dom";
import Experience from "./experience";
import github from '../../images/github.png'
import velog from '../../images/velog.png'
import oldV from '../../images/favicon.png'
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components'

const Stack = styled.img`  
  height:50px;
  margin-right:10px;
`;

const LinkDiv = styled.div`  
  position:fixed;
  right:10px;
  bottom:20px;
  display:flex;
`;
const adminButton = () => toast.dark('방향키와 엔터키를 사용해보세요 ⌨️', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,

});;
function OnKeyPress(idx, history) {
    let dict = {
        0: ['skills', 'card-hover skills', 'card skills', 'Skills'], 1: ['projects', 'card-hover projects', 'card projects', 'Projects'],
        2: ['experience', 'card-hover experience', 'card experience', 'Experience']
    };

    useEffect(() => {
        adminButton();
        function onKeyup(e) {
            let to_find = null;
            if (e.key === 'Enter') {

                history.push("/" + dict[idx][3]);
            }
            if (['ArrowRight', 'ArrowLeft'].includes(e.key)) {

                if (e.key === 'ArrowRight') {
                    idx = (idx + 4) % 3;
                } else if (e.key === 'ArrowLeft') {
                    idx = (idx + 2) % 3
                }

                for (let i = 0; i < 3; i++) {
                    if (i === idx) {
                        to_find = dict[idx];
                        console.log(to_find[0])
                        document.getElementById(to_find[0]).className = to_find[1];
                    } else {

                        to_find = dict[i];

                        document.getElementById(to_find[0]).className = to_find[2];
                    }
                }
            }


        }
        window.addEventListener('keyup', onKeyup);
        return () => window.removeEventListener('keyup', onKeyup);
    }, []);
}

const Select = () => {

    const history = useHistory();
    let idx = 0;

    OnKeyPress(idx, history, () => {

    });



    return (
        <div className="page">
            <Skills></Skills>
            <Projects></Projects>
            <Experience></Experience>
            <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{ width: "500px", fontSize: "20px" }}
            />
            <LinkDiv>            
            <a href="https://github.com/moonseoklee" target="_blank">
                <Stack src={github} style={{ marginTop: "10px", cursor: "pointer" }} onClick=""></Stack>
            </a>
            <a href="https://velog.io/@moonseok" target="_blank">
                <Stack src={velog} style={{ marginTop: "10px", cursor: "pointer" }} onClick=""></Stack>
            </a>
            
            </LinkDiv>
        </div>
    );
};

export default Select;