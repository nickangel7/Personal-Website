import React from 'react';
import cachemunklogo from './assets/cachemunklogo.png';
import githublogo from './assets/githublogo.png';
import npmlogo from './assets/npmlogo.png';
import typescriptlogo from './assets/typescriptlogo.png';
import nodelogo from './assets/nodelogo.png';
import reactlogo from './assets/reactlogo.png';
import dockerlogo from './assets/dockerlogo.png';
import awslogo from './assets/awslogo.png';
import sqllogo from './assets/sqllogo.png';
import '../style.css';

const Portfolio = () => {
  return (
    <div className='portfolio section'>
      <h1 className='portfolio-title'>My Work</h1>


      <div className='pages'>


        <h1 className='page-title section'>
          Cachemunk
          <img src={cachemunklogo} className='cachemunklogo'></img>
          <p className='cachemunk-description'>
            Application layer caching middleware library for Node.js and Redis
          </p>


          <div className='git-npm'>
            <img src={githublogo} className='reference'></img>
            <img src={npmlogo} className='reference'></img>
          </div>
          
          <div className='tech-stack'>
            <h1 className='techstack-made'>Made with:</h1>
            <img src={typescriptlogo} className='techlogo'></img>
            <img src={nodelogo} className='techlogo'></img>
            <img src={reactlogo} className='techlogo'></img>
            <img src={dockerlogo} className='techlogo'></img>
            <img src={awslogo} className='techlogo'></img>
            <img src={sqllogo} className='techlogo'></img>
          </div>
        </h1>
      </div>
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
