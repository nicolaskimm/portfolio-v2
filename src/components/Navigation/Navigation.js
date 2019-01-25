import React from 'react';
import { Link } from 'react-router';
import './Navigation.css';

const Navigation = (props) => {
  return (
    <div className='navigation'>
      <ul className='navigation_list'>
        <li className='navigation_list_item'><Link className='navigation_list_item-link' to='/'>home</Link></li>
        <li className='navigation_list_item'><Link className='navigation_list_item-link' to='/aboutme'>about me</Link></li>
        <li className='navigation_list_item'><Link className='navigation_list_item-link' to='/projects'>projects</Link></li>
        <li className='navigation_list_item'><Link className='navigation_list_item-link' to='/contact'>contact</Link></li>
      </ul>
      {props.children}
    </div>
  )
}

export default Navigation;