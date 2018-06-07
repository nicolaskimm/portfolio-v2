import React from 'react';
import './AboutMe.css';

const AboutMe = (props) => {
  return (
    <div className='aboutMe'>
      <div className='aboutLeft'>
        <h1> 50% of me. </h1>
        <p>
          I never thought that one day I will be an aspiring programmist. 
          My story doesn't start with 'since I was kid I loved computers 
          and spent hours learning how they work and what possibilites they 
          give'. I was more like 'oh yes, I love might and magic 3 and oh my 
          god, my computer can run crazy taxi 3!'. My interest in 
          programming started few months ago. It began with codecademy and 
          'Programuj dziewczyno' workshops. After a month of learning 
          on my own I invested my money and time in Kodilla bootcamp. 
          This journey took me 6 months, but gave me so much excitement!
          Most of my time I spend on learning JavaScript and enhancement 
          this knowledge with ReactJS library, NPM package ecosystem, 
          Node.js runtime and his web framework - Express. In my program was 
          also place for MongoDB database and it's GUI - Robo 3T. Of course I started 
          with basics like HTML5, CSS3, Sass, Bootstrap. 
          I'd really love to learn more about ReactJS - it's 
          such a cool and powerfull library. Now, when I've finished bootcamp, 
          I'm looking for my first employment as a junior web developer.  
        </p>
      </div>
      <div className='aboutRight'>
        <h1> ...and another half. </h1>
        <p> duzo tekstow fajnych
          duzo fajnych tesktow
          duzo tekstow fajnych
          duzo fajnych tesktow
          duzo tekstow fajnych
          duzo fajnych tesktowduzo tekstow fajnych
          duzo fajnych tesktow
          duzo tekstow fajnych
          duzo fajnych tesktowduzo tekstow fajnych
          duzo fajnych tesktow
        </p>
        <div className='hobbyPhotos'>
          <img src={require('../../views/boardgames.jpeg')} alt='photo' />
          <img src={require('../../views/cinema.jpeg')} alt='photo' />
          <img src={require('../../views/music.jpeg')} alt='photo' />
          <img src={require('../../views/baking.jpg')} alt='photo' />
          <img src={require('../../views/ceramic.jpg')} alt='photo' />
          <img src={require('../../views/videogames.jpg')} alt='photo' />
        </div>
      </div>
    </div>
  )
}

export default AboutMe;