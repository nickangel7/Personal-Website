import React from 'react';
import '../style.css';
import logo from './assets/linkedinlogo.png';
import githublogo from './assets/githublogo.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='copyright'>© Nicholas Angelopoulos 2025</p>
      <div className='footericons'>
        <img src={logo} alt='Logo' className='logofooter' />
        <img src={githublogo} alt='Logo' className='logofooter' />
      </div>
    </footer>
  );
};

export default Footer;
