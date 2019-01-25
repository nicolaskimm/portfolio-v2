import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className='projects'>
      <div className='project_container'>
        <div className='project_photo project_photo-bggapp'></div>
        <div className='project_describe'>
          <h1> BGGApp </h1>
          <h3> React / Express / Node.js / Webpack </h3>
          <div className='project_describe_links'>
            <div className='project_describe_links-githublink'>
              <a href="https://github.com/nicolaskimm/BGGAppReact">github</a>
            </div>
            <div className='project_describe_links-demolink'>
              <a href="https://nicolaskimm.github.io/BGGAppReact/">demo</a>
            </div>
          </div>  
        </div>
      </div>
      <div className='project_container'>
        <div className='project_photo project_photo-budgety'></div>
        <div className='project_describe'>
          <h1> Budgety </h1>
          <h3> Javascript / ES6 </h3>
          <div className='project_describe_links'>
            <div className='project_describe_links-githublink'>
              <a href="https://github.com/nicolaskimm/budgety-">github</a>
            </div>
            <div className='project_describe_links-demolink'>
              <a href="https://nicolaskimm.github.io/budgety-/">demo</a>
            </div>
          </div>
        </div>
      </div>
      <div className='project_container'>
        <div className='project_photo project_photo-sudoku'></div>
        <div className='project_describe'>
          <h1> Sudoku </h1>
          <h3> React / Sudoku.js  </h3>
          <div className='project_describe_links'>
            <div className='project_describe_links-githublink'>
              <a href="https://sudoku-r.herokuapp.com/">github</a>
            </div>
            <div className='project_describe_links-demolink'>
              <a href="demo">demo</a>
            </div>
          </div> 
        </div>
      </div>
      <div className='project_container'>
        <div className='project_photo project_photo-dicegame'></div>
        <div className='project_describe'>
          <h1> Dice Game </h1>
          <h3> JavaScript </h3>
          <div className='project_describe_links'>
            <div className='project_describe_links-githublink'>
              <a href="https://nicolaskimm.github.io/Dice-Game/">github</a>
            </div>
            <div className='project_describe_links-demolink'>
              <a href="demo">demo</a>
            </div>
          </div>
        </div>
      </div>
      <div className='project_container'>
        <div className='project_photo project_photo-chat'></div>
        <div className='project_describe'>
          <h1> Chat App </h1>
          <h3> React / Express / MongoDB / Socket.IO / Webpack </h3>
          <div className='project_describe_link'>
            <div className='project_describe_links-githublink'>
              <a href="https://github.com/nicolaskimm/module_18">github</a>
            </div>
            <div className='project_describe_links-demolink'>
              <a href="demo">demo</a>
            </div>
          </div>
        </div>
      </div>
      <div className='project_container'>
        <div className='project_photo project_photo-psd'></div>
        <div className='project_describe'>
          <h1> PSD to HTML </h1>
          <h3> HTML / CSS / Sass </h3>
          <div className='project_describe_links'>
            <div className='project_describe_links-githublink'>
              <a href="https://nicolaskimm.github.io/module_7_7/">github</a>
            </div>
            <div className='project_describe_links-demolink'>
              <a href="https://nicolaskimm.github.io/module_7_7/">demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;