import React from 'react';
import '../style.css';
import logo from './assets/linkedinlogo.png';
import githublogo from './assets/githublogo.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='copyright'>© Nicholas Angelopoulos 2025</p>
      <div className='footericons'>
        <a href='https://www.linkedin.com/in/nicholas-angelopoulos7'>
          <img src={logo} alt='Logo' className='logofooter' />
        </a>
        <a href='https://github.com/nickangel7' class='flex items-center'>
          <img src={githublogo} alt='Logo' className='logofooter' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
