import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className='projectsGallery'>
      <img className='galleryItem' src={require('../../views/kanban.jpg')} alt='kanban' />
      <img className='galleryItem' src={require('../../views/scorekeeper.jpg')} alt='scorekeeper' />
      <img className='galleryItem' src={require('../../views/kanban.jpg')} alt='kanban' />
      <img className='galleryItem' src={require('../../views/scorekeeper.jpg')} alt='scorekeeper' />
    </div>
  )
}

export default Projects;