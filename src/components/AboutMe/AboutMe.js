import React from 'react';
import './AboutMe.css';
import { CSSTransitionGroup } from 'react-transition-group';
import Gallery from '../Gallery/Gallery';

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
            I never thought that one day I will be an aspiring programmist. My story doesn't start with 'since I was kid 
            I loved computers and spent hours learning how they work and what possibilites they give'. I was more like 'oh yes, 
            I love might and magic 3 and oh my god, my computer can run crazy taxi 3!'. My interest in programming started few 
            months ago. It began with Codecademy platform and 'Programuj dziewczyno' workshop. After a month of learning on my own 
            I invested my time in Kodilla bootcamp. Now I know that I want to develop my 
            skills in Javascript and ReactJS library. But programming isn't of course 100% of me. <br />
            <br />
            First of all, I'm an euro-gamer, that's why I love board games with minimal randomness, I'm more 'calculate & plan' type of human. NO ADVENTURES, ONLY COUNTING! 
            (I'm kidding, sometimes I can throw some dice and fight monsters). Next on my list are video games. Enough to say that 
            I love playing them since I was kid. I don't know what my first game was (beside drawing abstract art in paint), but 
            I remember games like Return to Castle Wolfenstein, Tomb Raider, Crash Bandicoot! My last bigger game I played was Evil Within 2.
            At this moment I will always enjoy few rounds in Fortnite. Favourite game of all time? Easy. Last Of Us. 
            I also like baking and cooking. It's very relaxing and I really love pies! Like most people on earth I love movies and
            TV shows! Last good movie I've seen was "I, Tonya" and last good shows: maybe "Stranger Things" & "Bates Motel". 
            As it comes to music I still remember Nick Cave performance in Warsaw. The best. But right now for most of my time I'm listening Billy Eilish (youtube). 
            Last thing on my list is ceramic. My friend works in this industry and she showed me the ceramic magic. Last thing I made was lovely pot plant 
            which look like Groot. So much talent.  
            </p>
          </CSSTransitionGroup>
        </div>
        <div className='about-me__right'>
          <button onClick={this.handleClick.bind(this)} className={this.state.className}> nah, enough reading, show me some pictures!</button>
          { this.state.isVisible ? <Gallery /> : null }
        </div>
      </div>
    )
  }
}

export default AboutMe;
