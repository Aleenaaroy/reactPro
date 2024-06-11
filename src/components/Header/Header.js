import React from 'react';
import './Header.css';
import {LOGO_URL} from '../../utils/constants';

const Header = () => {
  return (
    <div className='header-container'>
      <img className="logo"src={LOGO_URL}></img>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </div>
  )
}

export default Header
