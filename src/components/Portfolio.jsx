import React from 'react';
import '../style.css';

const Portfolio = () => {
  return (
    <div className='portfolio section'>
      <h1 className='portfolio-title'>My Work</h1>
      <div className='pages'></div>
      <nav className='nav-container'>
        <ul className='nav-reel'>
          <li className='reel end'>
            <span className='arrow'>{'<'}</span>
          </li>
          <li className='reel'>1</li>
          <li className='reel'>2</li>
          <li className='reel'>3</li>
          <li className='reel'>4</li>
          <li className='reel end'>
            <span className='arrow'>{'>'}</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Portfolio;
