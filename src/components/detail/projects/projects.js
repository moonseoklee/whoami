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




const customStyles = {
  content: {
    width: '500px',
    height: '900px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0
  }
};

const Projects = () => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [projectIdx, setProjectIdx] = useState(0);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([{}])
  const [project, setProject] = useState({})

  function openModal(projectIdx) {
    setIsOpen(true);
    setProjectIdx(projectIdx);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  const Card = (project, i) => {

    return (
      <div className="gallery-item" tabIndex="0" onClick={() => { openModal(project.id) }}>
        <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="gallery-image" alt="" />

        <div className="gallery-item-info">
          <ul>
            <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> {project.id}</li>
            <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
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
        
        setProjects(res.data);
        
        setCategory(res.data[0].category);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };  
    fetchProjects();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러ㅠㅠ</div>;
  if (!category) return null;

  return (
    <div className="">
      <header>
        <div className="container">
          <div className="profile">

            <div className="profile-user-settings">
              <h1 className="profile-user-name">{category}</h1>


              <button className="btn profile-settings-btn" aria-label="profile settings" onClick={adminButton}><FontAwesomeIcon icon={faCog} /></button>
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
            <div className="profile-stats">
              <ul>
                <li><span className="profile-stat-count">{projects.length}</span> Total</li>
                <li><span className="profile-stat-count"></span> completed</li>
                <li><span className="profile-stat-count"></span> ing</li>
              </ul>
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


            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
              ariaHideApp={false}
            >
              <ProjectsModal closeModal={closeModal} project={projects[projectIdx]}></ProjectsModal>
            </Modal>

          </div>
          {/*<div className="loader"></div>*/}
        </div>
      </main>
    </div>
  );
};

export default Projects;