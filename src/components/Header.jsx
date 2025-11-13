import React from 'react';
import '../style.css';
import logo from './assets/reactlogo.png';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='Logo' className='logo' />
      <nav>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>About Me</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
