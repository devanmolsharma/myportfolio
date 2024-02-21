import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Comments from './Comments';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './ProjectDialog.css'; // Keep your custom styles if needed

function ProjectDialog(params) {
    if(!params.project){
        return;
    }
    

    const handleClose = () => {
        params.setShow(false)
    };

    return (
        <Modal dialogClassName='modal-xl' show={params.show} onHide={handleClose} size="lg" aria-labelledby="modal-title-centered" centered>
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title id="modal-title-centered">
          Project Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
    <div className='row'>
        <div className='col-sm'>
        <div className='project-details'>
          <img className='project-thumbnail img-fluid' src={params.project.thumbnailUrl} alt="Project Thumbnail"/>
          <div className='project-description'>
            <p>{params.project.description}</p>
            <Button variant="outline-primary" className="project-link-btn" onClick={() => window.location.href = params.project.url}>Explore Project</Button>
          </div>
        </div>
        <div className='learnings'>
          <h5 className="learnings-title">What I Learned</h5>
          {params.project.thingsLearnt.map((item, index) => (
            <div key={index} className='learning-item'>{item}</div>
          ))}
        </div>
        </div>
        
        <Comments className='project-comments col-sm' comments={params.project.comments} onNewComment={(name, comment) => { params.handleComment(params.id, name, comment); }} />
        </div>
        </Modal.Body>
      <Modal.Footer className="modal-footer-custom">
        <Button variant="outline-secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
}

export default ProjectDialog;
