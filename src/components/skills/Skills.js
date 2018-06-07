import React from 'react';
import './Skills.css';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faReact from '@fortawesome/fontawesome-free-brands/faReact';
import faJs from '@fortawesome/fontawesome-free-brands/faJs';
import faNodeJs from '@fortawesome/fontawesome-free-brands/faNodeJs';
import faHtml5 from '@fortawesome/fontawesome-free-brands/faHtml5';
import faCss3 from '@fortawesome/fontawesome-free-brands/faCss3';

const Skills = () => {
  return (
    <div className='skills'>
      <div className='skillbox skill1'>
        <FontAwesomeIcon icon={faReact} />
      </div>
      <div className='skillbox skill2'>
        <FontAwesomeIcon icon={faJs} />
      </div>
      <div className='skillbox skill3'>
        <FontAwesomeIcon icon={faNodeJs} />
      </div>
      <div className='skillbox skill4'>
        <FontAwesomeIcon icon={faReact} />
      </div>
      <div className='skillbox skill5'>
        <FontAwesomeIcon icon={faHtml5} />
      </div>
      <div className='skillbox skill6'>
        <FontAwesomeIcon icon={faCss3} />
      </div>
    </div>
  )
}

export default Skills;