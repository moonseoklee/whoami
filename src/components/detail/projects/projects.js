import React, { useState, useEffect } from 'react';
import '../detail.css'
import styled from 'styled-components'
import { faCamera, faCog } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import ProjectsModal from './modal';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const Projects = () => {
  var subtitle;
  const [modalIsOpen,setIsOpen] = useState(false);
  const [projectIdx,setProjectIdx] = useState(0);
  function openModal(projectIdx) {
    setIsOpen(true);
    setProjectIdx(projectIdx);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }
  return (
    <div className="">
      <header>
        <div className="container">
          <div className="profile">
            
            <div className="profile-user-settings">
              <h1 className="profile-user-name">projects</h1>
              
              <button className="btn profile-settings-btn" aria-label="profile settings"><FontAwesomeIcon icon={faCog} /></button>
            </div>
            <div className="profile-stats">
              <ul>
                <li><span className="profile-stat-count">12</span> Total</li>
                <li><span className="profile-stat-count">5</span> completed</li>
                <li><span className="profile-stat-count">7</span> ing</li>
              </ul>
            </div>
            <div className="profile-bio">
              <p><span className="profile-real-name">Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="gallery">
            
            <div className="gallery-item" tabIndex="0" onClick={openModal}>
              <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="gallery-image" alt="" />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 56</li>
                  <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                </ul>
              </div>
            </div>
            
          
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ProjectsModal closeModal={closeModal} projectIdx={0}></ProjectsModal>
        </Modal>
            
          </div>
          {/*<div className="loader"></div>*/}
        </div>
      </main>
    </div>
  );
};

export default Projects;