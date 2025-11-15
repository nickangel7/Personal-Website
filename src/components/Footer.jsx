import React from 'react';
import '../style.css';
import logo from './assets/linkedinlogo.png';
import githublogo from './assets/githublogo.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>© Nicholas Angelopoulos 2025</p>
      <div className='footericons'>
        <img src={logo} alt='Logo' className='logo' />
        <img src={githublogo} alt='Logo' className='logo' />
      </div>
    </footer>
  );
};

export default Footer;
