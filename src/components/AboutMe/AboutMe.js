import React from 'react';
import './AboutMe.css';
import { CSSTransitionGroup } from 'react-transition-group';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faReact from '@fortawesome/fontawesome-free-brands/faReact';
import faJs from '@fortawesome/fontawesome-free-brands/faJs';
import faNodeJs from '@fortawesome/fontawesome-free-brands/faNodeJs';
import faHtml5 from '@fortawesome/fontawesome-free-brands/faHtml5';
import faCss3 from '@fortawesome/fontawesome-free-brands/faCss3';
import faSass from '@fortawesome/fontawesome-free-brands/faSass';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faNpm from '@fortawesome/fontawesome-free-brands/faNpm';

class AboutMe extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      className: 'about-me__button-active',
    }
  }

  handleClick() {
    this.setState({
      isVisible: true,
      className: 'about-me__button-disactive'
    })
  }
  
  render() {
    return (
      <div className='about-me'>
        <div className='about-me__left'>
          <CSSTransitionGroup
            transitionName="about-me__text_transition"
            transitionAppear={ true }
            transitionAppearTimeout= {2500}>
            <p className='about-me__text'>
              <span className='about-me__text-header'>Programming.</span> I never thought that one day I will be an aspiring programmist. I was more like 'yeah, sure, programming? And later scholarship on Hogwarth'. 
              My interest in programming started about a little over a year ago. It began with Codecademy platform and 'Programuj dziewczyno' workshop. After a month of learning on my own 
              I invested my time in Kodilla bootcamp. And I loved it. It was hard, but learning programming is a great thing. Sometimes I want to drop few 'f' words and drop it, but I'm still coming back
              and not giving up. During this six months of bootcamp I get familiar with many technologies. Most of projects were based on Javascript and it's library - ReactJs.
              Of course we started with basics like HTML5, CSS, Sass and BootStrap. I was introduce to terms like RWD, Flexbox, Grid System, BEM Methodology. 
              Also throughout all bootcamp I was using Git and Github - we cover basic commands like push, pull, branches system etc. Next came JS with JQuery, AJAX and Node.js ecosystem with
              NPM package manager. Then came newer standard of ECMAScript - ES6. Next was Express and Redux, and in the end MongoDB and simple unit tests using Mocha and Jest. I cover the basics with most of them, after all I am just beginner in IT world. 
              Since that I am practicing a lot with React. <br />
              <br />
              <span className='about-me__text-header'>Also.</span> I'm a video and board gamer (eurogames for life!). I love to create and try new things! Like making ceramic magic in my friends' workshop. Also few months ago I adopted marvellous dog.
              His name is Elon (because he is super smart!). He and programming are my time consumers. But I try to have some time to waste on Netflix and chill.<br />
              Few important things: <br />
              1. Favourite game: Last of Us. <br />
              2. Favourite board game: Everyone I have. <br />
              3. Favourite musician: Nick Cave. <br />
              4. Last great event: (beside adopting Elon) Nick Caves' concert!
            </p>
          </CSSTransitionGroup>
        </div>
        <div className='about-me__right'>
          <CSSTransitionGroup
            className='skillbox'
            transitionName="skillstransition"
            transitionAppear={ true }
            transitionAppearTimeout= {1300}>
            <div className='skillbox skill1'>
              <i className='skillbox-skillIcon'><FontAwesomeIcon icon={faHtml5} /></i>
            </div>
            <div className='skillbox skill2'>
              <i className='skillbox-skillIcon'><FontAwesomeIcon icon={faCss3} /></i>
            </div>
            <div className='skillbox skill3'>
              <i className='skillbox-skillIcon'><FontAwesomeIcon icon={faSass} /></i>
            </div>
            <div className='skillbox skill4'>
              <i className='skillbox-skillIcon'><FontAwesomeIcon icon={faJs} /></i>
            </div>
            <div className='skillbox skill5'>
              <i className='skillbox-skillIcon'><FontAwesomeIcon icon={faReact} /></i>
            </div>
            <div className='skillbox skill6'>
              <i className='skillbox-skillIcon'><FontAwesomeIcon icon={faNodeJs} /></i>
            </div>
            <div className='skillbox skill3'>
              <i className='skillbox-skillIcon'><FontAwesomeIcon icon={faGithub} /></i>
            </div>
            <div className='skillbox skill4'>
              <i className='skillbox-skillIcon'><FontAwesomeIcon icon={faNpm} /></i>
            </div>
          </CSSTransitionGroup>
          
        </div>
      </div>
    )
  }
}

export default AboutMe;