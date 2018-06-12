import React from 'react';
import './AboutMe.css';
import { CSSTransitionGroup } from 'react-transition-group';

const AboutMe = (props) => {
  return (
    <div className='aboutMe'>
      <div className='aboutLeft'>
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={ true }
          transitionAppearTimeout= {1000}>
          <p className='textme'>
            I never thought that one day I will be an aspiring programmist. 
            My story doesn't start with 'since I was kid I loved computers 
            and spent hours learning how they work and what possibilites they 
            give'. I was more like 'oh yes, I love might and magic 3 and oh my 
            god, my computer can run crazy taxi 3!'. My interest in 
            programming started few months ago. It began with codecademy and 
            'Programuj dziewczyno' workshops. After a month of learning 
            on my own I invested my money and time in Kodilla bootcamp. 
            This journey took me 6 months, but gave me so much excitement!
            Most of my time I spend on learning <span>JavaScript</span> and enhancement 
            this knowledge with <span>ReactJS</span> library, <span>NPM</span> package ecosystem, 
            <span> Node.js</span> runtime and his web framework - <span>Express</span>. In my program was 
            also place for <span>MongoDB</span> database and it's GUI - <span>Robo 3T</span>. Of course I started 
            with basics like <span>HTML5, CSS3, Sass, Bootstrap</span>. Because of the intensivity of the course some of the technologies were only shortly presented - after all I'm aware that my learning is still on the starting point ant there is plenty to learn.
            I'd really love to focus on getting deeper into ReactJS - it's 
            such a cool and powerfull library. Now, when I've finished bootcamp, 
            I'm looking for my first employment as a junior web developer.  
          </p>
        </CSSTransitionGroup>
      </div>
      <div className='aboutRight'>
        <CSSTransitionGroup
          transitionName="example2"
          transitionAppear={ true }
          transitionAppearTimeout= {1000}>
          <div className='hobby1 hobby'></div>
          <div className='hobby2 hobby'></div>
          <div className='hobby3 hobby'></div>
          <div className='hobby4 hobby'></div>
          <div className='hobby5 hobby'></div>
          <div className='hobby6 hobby'></div>
        </CSSTransitionGroup>
      </div>
    </div>
  )
}

export default AboutMe;