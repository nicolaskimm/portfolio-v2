import React from 'react';
import './Skills.css';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faReact from '@fortawesome/fontawesome-free-brands/faReact';
import faJs from '@fortawesome/fontawesome-free-brands/faJs';
import faNodeJs from '@fortawesome/fontawesome-free-brands/faNodeJs';
import faHtml5 from '@fortawesome/fontawesome-free-brands/faHtml5';
import faCss3 from '@fortawesome/fontawesome-free-brands/faCss3';
import faSass from '@fortawesome/fontawesome-free-brands/faSass';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faNpm from '@fortawesome/fontawesome-free-brands/faNpm';




const Skills = () => {
  return (
    <div className='skills'>
      <div className='skillsLeft'>
        <div className='skillbox skill1'>
          <FontAwesomeIcon icon={faHtml5} />
        </div>
        <div className='skillbox skill2'>
          <FontAwesomeIcon icon={faCss3} />
        </div>
        <div className='skillbox skill3'>
          <FontAwesomeIcon icon={faSass} />
        </div>
        <div className='skillbox skill4'>
          <FontAwesomeIcon icon={faJs} />
        </div>
        <div className='skillbox skill5'>
          <FontAwesomeIcon icon={faReact} />
        </div>
        <div className='skillbox skill6'>
          <FontAwesomeIcon icon={faNodeJs} />
        </div>
        <div className='skillbox skill3'>
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className='skillbox skill4'>
          <FontAwesomeIcon icon={faNpm} />
        </div>
      </div>
      <div className='divLine'><div className='skillsLine'></div></div>
      <div className='skillsRight'>
        <p> I started from the beginning - HTML5 and CSS3. I went through Bootstrap and Sass. Of course I am also familiar with things like RWD, Grid system, Flexbox and BEM methodology. Next I was introduced to Git and GitHub and I started to push all my local projects to remote respository. Then came this moment to started learning Javascript (crazy time). Lots of theory and basics like: functions, loops, arrays, statements, data types etc. I was doing lots of simple tasks like create function which has printed stars in console to create christmas tree. Then all the theory was packed to bigger task - a game: Rock, paper, scissors! Next was AJAX technology and Node.js with NPM package ecosystem. Finally we reach to ReactJS! Learning React is giving me so much satisfaction, it's clicked from the beginning. Adding the JSX preproccesor increase my love for this library. My first bigger project created with React was gif search engine. Then I was introduce to ES6 standard, ExpressJS framework. Here I had to create simple app with Google API authentication and after that something bigger came: Chat App. I really enjoyed creating it. I felt like my brain was on fire! I add extra things to the task like sendind private messages or changing rooms. It was challenging but at the end very satisfying. After that Redux knocked on my door and React-router (at this moment I had a blast! I will use it to build my portfolio, because I didn't want to one-side scroller, I wanted something different). Finally it all led to MERN technology stack. Final big project was Kanban Board (so many tears but not only sad). At the end of my rocky road I was introduce to MongoDB database and it's GUI - ROBO 3T. I did simple CRUD operations. And last but not least: unit tests using Mocha and Jest.
        </p>
      </div>
    </div>
  )
}

export default Skills;