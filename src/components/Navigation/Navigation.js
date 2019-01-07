import React from 'react';
import { Link } from 'react-router';
import './Navigation.css';

const Navigation = (props) => {
  return (
    <div className='navigation'>
      <ul className='navigationList'>
        <li className='listItem'><Link className='listItem-link' to='/'>home</Link></li>
        <li className='listItem'><Link className='listItem-link' to='/aboutme'>about me</Link></li>
        <li className='listItem'><Link className='listItem-link' to='/projects'>projects</Link></li>
        <li className='listItem'><Link className='listItem-link' to='/contact'>contact</Link></li>
      </ul>
      {props.children}
    </div>
  )
}

export default Navigation;