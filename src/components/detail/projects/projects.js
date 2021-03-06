import React, { useState, useEffect } from 'react';
import '../detail.css'
import styled from 'styled-components'
import { faCamera, faCog } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProjectsModal from './modal';
import Modal from 'react-modal';
import getProjects from '../../../functions/api_refer'
import { faBlackberry } from '@fortawesome/free-brands-svg-icons';
import tree from  '../../../images/tree.jpg'


const Projects = () => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [projectIdx, setProjectIdx] = useState(0);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([{}])
  const [project, setProject] = useState({})

  function openModal(idx) {
    setIsOpen(true);
    setProjectIdx(idx);
  }




  const Card = (project, i) => {

    return (
      <div className="gallery-item" tabIndex="0" onClick={() => { openModal(project.id) }}>
        <img src={project.image} className="gallery-image" alt="" style={{borderRadius:"10px"}} />

        <div className="gallery-item-info">
          <ul>
            <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> {project.title}</li>
            <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i></li>
          </ul>
        </div>
      </div>
    )
  }

  const CardList = projects.map(
    (project, i) => (
      Card(project, i)
    )
  )
  const adminButton = () => toast.error('👀 moonseok only 👀', {
    position: "top-center",
    autoClose: 1502,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });;

  useEffect(() => {
    
    const fetchProjects = async () => {
      try {
        setError(null);

        setLoading(true);
        const res = await getProjects("프로젝트/");
        for(let i=0;i<res.data.length;i++){
          res.data[i].id = i;
        }
        setProjects(res.data);
        console.log(res.data);
        setCategory(res.data[0].category);
      } catch (e) {
        console.log(e);
      }

      setLoading(false);
    };  
    fetchProjects();
  }, []);
  
  
 const selectModal = () => {
   setIsOpen(!modalIsOpen) // true/false toggle
 }
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러ㅠㅠ</div>;
  if (!category) return null;

  return (
    <div className="">
      <button className="btn profile-settings-btn" aria-label="profile settings" onClick={adminButton} style={{float:"right"}}><FontAwesomeIcon icon={faCog} /></button>
      <header>
        <div className="container">
          <div className="profile">

            <div className="profile-user-settings">
              <h1 className="profile-user-name">{category}</h1>


              
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
                style={{fontSize:"20px"}}
              />

            </div>
            
            <div className="profile-bio">
              <p><span className="profile-real-name">그동안 . </span> 해왔던 것들이에요🚣</p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="gallery">
            {CardList}
            
             <ProjectsModal 
                 displayModal={modalIsOpen}
                 closeModal={selectModal}
                 project={projects[projectIdx]}></ProjectsModal>           

          </div>
          {/*<div className="loader"></div>*/}
        </div>
      </main>
    </div>
  );
};

export default Projects;