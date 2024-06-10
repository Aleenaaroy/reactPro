import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <img className="logo"src='https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/a586d9116324325.605f8b343e11c.jpg'></img>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </div>
  )
}

export default Header
