import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className='projectsGallery'>
      <div className='project1 project'>
        <img className='galleryItem' src={require('../../views/kanban.jpg')} alt='kanban' />
      </div>
      <div className='projetc2 project'>
        <img className='galleryItem' src={require('../../views/scorekeeper.jpg')} alt='scorekeeper' />
      </div>
      <div className='projetc3 project'>
        <img className='galleryItem' src={require('../../views/kanban.jpg')} alt='kanban' />
      </div>
      <div className='projetc4 project'>
        <img className='galleryItem' src={require('../../views/kanban.jpg')} alt='kanban' />
      </div>
      <div className='projetc5 project'>
        <img className='galleryItem' src={require('../../views/scorekeeper.jpg')} alt='scorekeeper' />
      </div>
      <div className='projetc6 project'>
        <img className='galleryItem' src={require('../../views/kanban.jpg')} alt='kanban' />
      </div>      
    </div>
  )
}

export default Projects;