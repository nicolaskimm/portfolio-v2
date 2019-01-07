import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className='projects'>
      <div className='project'>
        <div className='projectPhoto1 projectPhoto'></div>
        <div className='projectDescribe'>
          <h1> BGGApp </h1>
          <h3> React / Express / Node.js / Webpack </h3>
          <div className='links'>
            <div className='githublink'>
              <a href="https://github.com/nicolaskimm/BGGAppReact">github</a>
            </div>
            <div className='demolink'>
              <a href="https://nicolaskimm.github.io/BGGAppReact/">demo</a>
            </div>
          </div>  
        </div>
      </div>
      <div className='project'>
        <div className='projectPhoto2 projectPhoto'></div>
        <div className='projectDescribe'>
          <h1> Budgety </h1>
          <h3> Javascript / ES6 </h3>
          <div className='links'>
            <div className='githublink'>
              <a href="https://github.com/nicolaskimm/budgety-">github</a>
            </div>
            <div className='demolink'>
              <a href="https://nicolaskimm.github.io/budgety-/">demo</a>
            </div>
          </div>
        </div>
      </div>
      <div className='project'>
        <div className='projectPhoto3 projectPhoto'></div>
        <div className='projectDescribe'>
          <h1> Sudoku </h1>
          <h3> React / Sudoku.js  </h3>
          <div className='links'>
            <div className='githublink'>
              <a href="https://github.com/nicolaskimm/sudoku">github</a>
            </div>
            <div className='demolink'>
              <a href="demo">demo</a>
            </div>
          </div> 
        </div>
      </div>
      <div className='project'>
        <div className='projectPhoto4 projectPhoto'></div>
        <div className='projectDescribe'>
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
        </div>
      </div>
      <div className='project'>
        <div className='projectPhoto5 projectPhoto'></div>
        <div className='projectDescribe'>
          <h1> Chat App </h1>
          <h3> React / Express / MongoDB / Socket.IO / Webpack </h3>
          <div className='links'>
            <div className='githublink'>
              <a href="https://github.com/nicolaskimm/module_18">github</a>
            </div>
            <div className='demolink'>
              <a href="demo">demo</a>
            </div>
          </div>
        </div>
      </div>
      <div className='project'>
        <div className='projectPhoto6 projectPhoto'></div>
        <div className='projectDescribe'>
          <h1> Landing Page </h1>
          <h3> HTML / CSS / Sass </h3>
          <div className='links'>
            <div className='githublink'>
              <a href="https://nicolaskimm.github.io/module_7_7/">github</a>
            </div>
            <div className='demolink'>
              <a href="https://nicolaskimm.github.io/module_7_7/">demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;