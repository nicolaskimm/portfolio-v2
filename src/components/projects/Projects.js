import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className='projects'>
      <div className='project'>
        <div className='projectPhoto1 projectPhoto'></div>
        <p className='projectDescribe'>
          <h1> Kanban Board </h1>
          <h3> MongoDB / Express / React / Node.js / Webpack / Redux </h3>
          <div className='links'>
            <div className='githublink'>
              <a href="github">github</a>
            </div>
            <div className='demolink'>
              <a href="demo">demo</a>
            </div>
          </div>  
        </p>
      </div>
      <div className='project'>
        <div className='projectPhoto2 projectPhoto'></div>
        <p className='projectDescribe'>
          <h1> Scorekeeper </h1>
          <h3> React / Enzyme </h3>
          <div className='links'>
            <div className='githublink'>
              <a href="github">github</a>
            </div>
            <div className='demolink'>
              <a href="demo">demo</a>
            </div>
          </div>
        </p>
      </div>
      <div className='project'>
        <div className='projectPhoto3 projectPhoto'></div>
        <p className='projectDescribe'>
          <h1> Sudoku </h1>
          <h3> React </h3>
          <div className='links'>
            <div className='githublink'>
              <a href="github">github</a>
            </div>
            <div className='demolink'>
              <a href="demo">demo</a>
            </div>
          </div> 
        </p>
      </div>
      <div className='project'>
        <div className='projectPhoto4 projectPhoto'></div>
        <p className='projectDescribe'>
          <h1> Dice Game </h1>
          <h3> JavaScript </h3>
          <div className='links'>
            <div className='githublink'>
              <a href="github">github</a>
            </div>
            <div className='demolink'>
              <a href="demo">demo</a>
            </div>
          </div>
        </p>
      </div>
      <div className='project'>
        <div className='projectPhoto5 projectPhoto'></div>
        <p className='projectDescribe'>
          <h1> Chat App </h1>
          <h3> React / Express / MongoDB / Socket.IO / Webpack </h3>
          <div className='links'>
            <div className='githublink'>
              <a href="github">github</a>
            </div>
            <div className='demolink'>
              <a href="demo">demo</a>
            </div>
          </div>
        </p>
      </div>
      <div className='project'>
        <div className='projectPhoto6 projectPhoto'></div>
        <p className='projectDescribe'>
          <h1> Landing Page </h1>
          <h3> HTML / CSS / Sass </h3>
          <div className='links'>
            <div className='githublink'>
              <a href="github">github</a>
            </div>
            <div className='demolink'>
              <a href="demo">demo</a>
            </div>
          </div>
        </p>
      </div>
    </div>
  )
}

export default Projects;