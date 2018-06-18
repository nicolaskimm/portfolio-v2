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
import { CSSTransitionGroup } from 'react-transition-group';


const Contact = () => {
  return (
    <div className='contact'>
      <h1 className='contact__header'> You can find me here </h1>
      <div className='contact__links'>
        <CSSTransitionGroup
        transitionName='contact__official_transition'
        transitionAppear={ true }
        transitionAppearTimeout= {2500}>
          <div className='contact__official'>
            <h2> contact </h2>
            <a href='mailto:j.krezolek@gmail.com'><FontAwesomeIcon icon={faAt} className='contact__icon' /> j.krezolek@gmail.com </a>
            <p><FontAwesomeIcon icon={faPhone} className='contact__icon' /> +48 795 611 325 </p>
            <a href='https://www.linkedin.com/in/joanna-kr%C4%99%C5%BCo%C5%82ek/'><FontAwesomeIcon icon={faLinkedin} className='contact__icon' /> linkedin </a>
            <a href='https://github.com/nicolaskimm'><FontAwesomeIcon icon={faGithub} className='contact__icon' /> github </a>
          </div>
        </CSSTransitionGroup>
        <CSSTransitionGroup
        transitionName='contact__social_transition'
        transitionAppear={ true }
        transitionAppearTimeout= {2500}>
          <div className='contact__social'>
            <h2> social media </h2>
            <a href='https://www.facebook.com/j.krezolek'><FontAwesomeIcon icon={faFacebook} className='contact__icon' /> facebook </a>
          </div>
        </CSSTransitionGroup>
        <CSSTransitionGroup
        transitionName='contact__other_transition'
        transitionAppear={ true }
        transitionAppearTimeout= {2500}>
          <div className='contact__other'>
            <h2> other cool stuff </h2>
            <a href='https://steamcommunity.com/id/nicolaskimm/'><FontAwesomeIcon icon={faSteam} className='contact__icon' /> steam </a>
            <a href='https://www.instagram.com/ednickk/'><FontAwesomeIcon icon={faInstagram} className='contact__icon' /> instagram </a>
            <a href='https://boardgamegeek.com/plays/bydate/user/nicolaskim/subtype/boardgame'><FontAwesomeIcon icon={faDice} className='contact__icon' /> boardgamegeek </a>
          </div>
        </CSSTransitionGroup>
      </div>
    </div>
  )
}

export default Contact;