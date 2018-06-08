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
        <p> Duis accumsan diam nibh, quis sagittis metus congue non. Curabitur cursus, dui eu porttitor viverra, tellus arcu pharetra quam, id aliquet quam ex eu eros. Nam rhoncus consectetur ligula sit amet sagittis. Aliquam aliquet massa non elit dapibus, ut imperdiet sem iaculis. Nunc non malesuada lectus. Suspendisse vitae ultricies felis, et tincidunt velit. Nunc ut massa rhoncus nibh aliquet congue. Vestibulum in luctus metus, sit amet sollicitudin nunc. Maecenas nisl erat, semper sit amet rhoncus id, faucibus porttitor mauris. Aliquam mollis pellentesque turpis quis semper. Sed a ipsum accumsan, tempus odio tincidunt, scelerisque lorem. Integer vel dolor vel metus volutpat laoreet. Suspendisse potenti.
        </p>
      </div>
    </div>
  )
}

export default Skills;