import React from 'react';
import javascriptlogo from './assets/javascriptlogo.png';
import typescriptlogo from './assets/javascriptlogo.png';

const Aboutme = () => {
  return (
    <div className='aboutme section'>
      <h1>About me</h1>
      <p>
        I am a full stack software engineer living in the Tampa Bay Area. I am
        passionate about creating beautiful products and solutions.
      </p>
      <p>
        In a previous life, I worked as an EMT, treating and transporting people
        to the hospital. When I am not coding, you can find me woodworking,
        lifting weights, or hanging out with my family.{' '}
      </p>
      <h1>Skills</h1>
      <img src={javascriptlogo} className='logo'></img>
    </div>
  );
};

export default Aboutme;
