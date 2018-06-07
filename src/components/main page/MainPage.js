import React from 'react';
import './MainPage.css';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faSteam from '@fortawesome/fontawesome-free-brands/faSteam';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';


const MainPage = () => {
  return (
    <div className='mainPage'>
      <div className='portrait'>
        <img src={require('../../views/portrait1.jpg')} alt='photo' />
      </div>
      <div className='startingpanel'>
        <div className='backLayer'>
          <div className='frontLayer'>
            <p> JOASIA </p>
            <p> KRĘŻOŁEK </p>
            <h1> junior web developer </h1>
            <p> MongoDB / Express / React / Node.js </p>
            <div className='icons'>
              <div className='socialIcon'>
              <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div className='socialIcon'>
                <FontAwesomeIcon icon={faSteam} />
              </div>
              <div className='socialIcon'>
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className='socialIcon'>
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <div className='socialIcon'>
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage;

