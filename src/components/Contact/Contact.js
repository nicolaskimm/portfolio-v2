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
      <h1 className='contact_header'> You can find me here </h1>
      <div className='contact_links'>
        <CSSTransitionGroup
        transitionName='contact_links-official_transition'
        transitionAppear={true}
        transitionAppearTimeout={2500}
        transitionEnter={false}
        transitionLeave={false}>
          <div className='contact_links-official'>
            <h2> contact </h2>
            <a href='mailto:j.krezolek@gmail.com'><FontAwesomeIcon icon={faAt} className='contact_links-icon' /> j.krezolek@gmail.com </a>
            <p><FontAwesomeIcon icon={faPhone} className='contact_links-icon' /> +48 795 611 325 </p>
            <a href='https://www.linkedin.com/in/joanna-kr%C4%99%C5%BCo%C5%82ek/'><FontAwesomeIcon icon={faLinkedin} className='contact_links-icon' /> linkedin </a>
            <a href='https://github.com/nicolaskimm'><FontAwesomeIcon icon={faGithub} className='contact_links-icon' /> github </a>
          </div>
        </CSSTransitionGroup>
        <CSSTransitionGroup
        transitionName='contact_links-social_transition'
        transitionAppear={true}
        transitionAppearTimeout={2500}
        transitionEnter={false}
        transitionLeave={false}>
          <div className='contact_links-social'>
            <h2> social media </h2>
            <a href='https://www.facebook.com/j.krezolek'><FontAwesomeIcon icon={faFacebook} className='contact_links-icon' /> facebook </a>
            <a href='https://www.instagram.com/ednickk/'><FontAwesomeIcon icon={faInstagram} className='contact_links-icon' /> instagram </a>
          </div>
        </CSSTransitionGroup>
        <CSSTransitionGroup
        transitionName='contact_links-other_transition'
        transitionAppear={true}
        transitionAppearTimeout={2500}
        transitionEnter={false}
        transitionLeave={false}>
          <div className='contact_links-other'>
            <h2> other cool stuff </h2>
            <a href='https://steamcommunity.com/id/nicolaskimm/'><FontAwesomeIcon icon={faSteam} className='contact_links-icon' /> steam </a>
            <a href='https://boardgamegeek.com/plays/bydate/user/nicolaskim/subtype/boardgame'><FontAwesomeIcon icon={faDice} className='contact_links-icon' /> boardgamegeek </a>
          </div>
        </CSSTransitionGroup>
      </div>
    </div>
  )
}

export default Contact;