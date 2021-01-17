import React, { useEffect, useRef } from "react";


import './select.css'
import Skills from './skills'
import Projects from './projects'
import { Link, useHistory } from "react-router-dom";
import Experience from "./experience";




function OnKeyPress(idx, history) {
    let dict = { 0: ['skills', 'card-hover skills', 'card skills','Skills'], 1: ['projects', 'card-hover projects', 'card projects','Projects'],
                2: ['experience', 'card-hover experience', 'card experience','Experience'] };

    useEffect(() => {
        function onKeyup(e) {
            let to_find = null;
            if (e.key==='Enter'){
                
                history.push("/"+dict[idx][3]);
            }
            if (['ArrowRight', 'ArrowLeft'].includes(e.key)) {

                if (e.key === 'ArrowRight') {
                    idx = (idx + 4) % 3;
                } else if(e.key === 'ArrowLeft') {
                    idx = (idx +2) % 3
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
        </div>
    );
};

export default Select;