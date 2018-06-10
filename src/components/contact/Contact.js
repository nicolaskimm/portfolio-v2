import React from 'react';
import './Contact.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faSteam from '@fortawesome/fontawesome-free-brands/faSteam';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faAt from '@fortawesome/fontawesome-free-solid/faAt';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faDice from '@fortawesome/fontawesome-free-solid/faDice';



const Contact = () => {
  return (
    <div className='contact'>
      <h1> You can find me here </h1>
        <div className='contactLinks'>
          <div className='official'>
            <h2> contact </h2>
            <a href='mailto:j.krezolek@gmail.com'><FontAwesomeIcon icon={faAt} className='icon' /> j.krezolek@gmail.com </a>
            <p><FontAwesomeIcon icon={faPhone} className='icon' /> +48 795 611 325 </p>
            <a href='https://www.linkedin.com/in/joanna-kr%C4%99%C5%BCo%C5%82ek/'><FontAwesomeIcon icon={faLinkedin} className='icon' /> linkedin </a>
            <a href='https://github.com/nicolaskimm'><FontAwesomeIcon icon={faGithub} className='icon' /> github </a>
          </div>
          <div className='social'>
            <h2> social media </h2>
            <a href='https://www.facebook.com/j.krezolek'><FontAwesomeIcon icon={faFacebook} className='icon' /> facebook </a>
          </div>
          <div className='cool'>
            <h2> other cool stuff </h2>
            <a href='https://steamcommunity.com/id/nicolaskimm/'><FontAwesomeIcon icon={faSteam} className='icon' /> steam </a>
            <a href='https://www.instagram.com/ednickk/'><FontAwesomeIcon icon={faInstagram} className='icon' /> instagram </a>
            <a href='https://boardgamegeek.com/plays/bydate/user/nicolaskim/subtype/boardgame'><FontAwesomeIcon icon={faDice} className='icon' /> boardgamegeek </a>
          </div>
      </div>

    </div>
  )
}

export default Contact;