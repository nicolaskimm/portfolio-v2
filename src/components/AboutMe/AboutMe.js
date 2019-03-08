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
      className: 'aboutMe__button-active',
    }
  }

  handleClick() {
    this.setState({
      isVisible: true,
      className: 'aboutMe__button-disactive'
    })
  }
  
  render() {
    return (
      <div className='aboutMe'>
        <div className='aboutMe_left'>
          <CSSTransitionGroup
            transitionName="aboutMe_left_transition"
            transitionAppear={true}
            transitionAppearTimeout={2500}
            transitionEnter={false}
            transitionLeave={false}>
            <p className='aboutMe_left_text'>
              <span className='aboutMe_left_text-header'>Programming.</span> I never thought that one day I will be an aspiring developer. I was more like 'yeah, sure, programming? And later master's degree at Hogwart'. 
              My interest in programming started about a little over a year ago. It began with Codecademy platform and 'Programuj dziewczyno' workshop. After a month of learning on my own 
              I invested my time in Kodilla bootcamp. And I loved it. It was hard, but learning programming is a great thing. Sometimes I wanted to drop few 'f' words and leave it, but I'm still coming back
              and not giving up. During this six months of bootcamp I get familiar with many technologies. Most of projects were based on <span className='aboutMe_left_text-tech'>Javascript </span> and it's library - <span className='aboutMe_left_text-tech'>ReactJs</span>.
              Of course we started with basics like <span className='aboutMe_left_text-tech'>HTML5, CSS, Sass and BootStrap</span>. I was introduce to terms like <span className='aboutMe_left_text-tech'>RWD, Flexbox, Grid System, BEM Methodology</span>. 
              Also throughout all bootcamp I was using <span className='aboutMe_left_text-tech'>Git and Github</span> - we cover basic commands like push, pull, branches system etc. Next came JS with <span className='aboutMe__text-tech'>JQuery, AJAX and Node.js</span> ecosystem with
<<<<<<< HEAD
              <span className='aboutMe_left_text-tech'> NPM package manager</span>. Then came newer standard of <span className='aboutMe_left_text-tech'>ECMAScript - ES6</span>. Next was <span className='aboutMe_left_text-tech'>Express and Redux</span>, and in the end <span className='aboutMe_left_text-tech'>MongoDB</span> and simple unit tests using <span className='aboutMe_left_text-tech'>Mocha and Jest</span>.
              I cover the basics with most of them, after all I am just beginner in IT world. Since that I am practicing a lot with React. <br />
=======
              <span className='aboutMe_left_text-tech'> NPM package manager</span>. Then came newer standard of <span className='aboutMe_left_text-tech'>ECMAScript - ES6</span>. Next was <span className='aboutMe_left_text-tech'>Express and Redux</span>, and in the end <span className='aboutMe_left_text-tech'>MongoDB</span> and simple unit tests using <span className='aboutMe_left_text-tech'>Mocha and Jest</span>.
              I cover the basics with most of them, after all I am just beginner in IT world. Since that I am practicing a lot with Javascript and React. <br />
>>>>>>> b4299595cf52eed7fa512299c9b5342f98c4073b
              <br />
              <span className='aboutMe_left_text-header'>Also.</span> I'm a video and board gamer (eurogames for life!). I love to create and try new things! Like making ceramic magic in my friends' workshop. Also few months ago I adopted marvellous dog.
              His name is Elon (because he is super smart!). He and programming are my time consumers. But I try to have some time to waste on Netflix and chill.<br />
              Few important things: <br />
              1. Favourite game: Last of Us. <br />
              2. Favourite board game: Every one I have. <br />
              3. Favourite musician: Nick Cave. <br />
              4. Last great event: (beside adopting Elon) Nick Caves' concert!
            </p>
          </CSSTransitionGroup>
        </div>
        <div className='aboutMe_right'>
          <CSSTransitionGroup
            className='aboutMe_right_skillbox'
            transitionName="aboutMe_right_skillbox-transition"
            transitionAppear={true}
            transitionAppearTimeout={2500}
            transitionEnter={false}
            transitionLeave={false}>
            <div className='aboutMe_right_skillbox aboutMe_right_skillbox-skill1'>
              <i className='aboutMe_right_skillbox-skillIcon'><FontAwesomeIcon icon={faHtml5} /></i>
            </div>
            <div className='aboutMe_right_skillbox aboutMe_right_skillbox-skill2'>
              <i className='aboutMe_right_skillbox-skillIcon'><FontAwesomeIcon icon={faCss3} /></i>
            </div>
            <div className='aboutMe_right_skillbox aboutMe_right_skillbox-skill3'>
              <i className='aboutMe_right_skillbox-skillIcon'><FontAwesomeIcon icon={faSass} /></i>
            </div>
            <div className='aboutMe_right_skillbox aboutMe_right_skillbox-skill4'>
              <i className='aboutMe_right_skillbox-skillIcon'><FontAwesomeIcon icon={faJs} /></i>
            </div>
            <div className='aboutMe_right_skillbox aboutMe_right_skillbox-skill5'>
              <i className='aboutMe_right_skillbox-skillIcon'><FontAwesomeIcon icon={faReact} /></i>
            </div>
            <div className='aboutMe_right_skillbox aboutMe_right_skillbox-skill6'>
              <i className='aboutMe_right_skillbox-skillIcon'><FontAwesomeIcon icon={faNodeJs} /></i>
            </div>
            <div className='aboutMe_right_skillbox aboutMe_right_skillbox-skill3'>
              <i className='aboutMe_right_skillbox-skillIcon'><FontAwesomeIcon icon={faGithub} /></i>
            </div>
            <div className='aboutMe_right_skillbox aboutMe_right_skillbox-skill4'>
              <i className='aboutMe_right_skillbox-skillIcon'><FontAwesomeIcon icon={faNpm} /></i>
            </div>
          </CSSTransitionGroup>
          
        </div>
      </div>
    )
  }
}

export default AboutMe;
