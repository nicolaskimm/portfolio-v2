import React from 'react';
import './MainPage.css';
import HoverImage from "react-hover-image";
import yourFile from "../../views/portrait2.jpg";
import yourFileHover from "../../views/portrait1.jpg";


class MainPage extends React.Component {
  render() {
    return (
      <div className='mainPage'>
        <div className='portrait'>
          <HoverImage src={yourFile} hoverSrc={yourFileHover} alt='photo' />
        </div>
        <div className='startingPanel'>
          <p> JOASIA </p>
          <p> KRĘŻOŁEK </p>
          <h1> junior web developer </h1>
          <p> JavaScript / React / Node.js </p>
        </div>
      </div>
    )
  }
}

export default MainPage;

