import React from 'react';
import { Link } from 'react-router';
import './Navigation.css';

const Navigation = (props) => {
  return (
    <div className='navigation'>
      <ul className='navigationList'>
        <li className='listItem'><Link to='/'>home</Link></li>
        <li className='listItem'><Link to='/aboutme'>about me</Link></li>
        <li className='listItem'><Link to='/skills'>skills</Link></li>
        <li className='listItem'><Link to='/projects'>projects</Link></li>
        <li className='listItem'><Link to='/contact'>contact</Link></li>
        <li className='listItem'><Link to='/loader'>loader</Link></li>
      </ul>
      {props.children}
    </div>
  )
}

export default Navigation;