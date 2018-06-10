import React from 'react';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className='mainPage'>
      <div className='portrait'>
        <img src={require('../../views/portrait2.jpg')} alt='photo' />
      </div>
      <div className='startingPanel'>
        <p> JOASIA </p>
        <p> KRĘŻOŁEK </p>
        <h1> junior web developer </h1>
        <p> MongoDB / Express / React / Node.js </p>
      </div>
    </div>
  )
}

export default MainPage;

