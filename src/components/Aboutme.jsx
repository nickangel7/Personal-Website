import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import javascriptlogo from './assets/javascriptlogo.png';
import typescriptlogo from './assets/typescriptlogo.png';
import reactlogo from './assets/reactlogo.png';
import htmllogo from './assets/htmllogo.png';
import csslogo from './assets/csslogo.png';
import nodelogo from './assets/nodelogo.png';
import sqllogo from './assets/sqllogo.png';
import mongologo from './assets/mongologo.png';
import jestlogo from './assets/jestlogo.png';
import dockerlogo from './assets/dockerlogo.png';
import redislogo from './assets/redislogo.png';
import awslogo from './assets/awslogo.png';
import gitlogo from './assets/gitlogo.png';
import whitegithublogo from './assets/whitegithublogo.png';

gsap.registerPlugin(useGSAP);

const Aboutme = () => {
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.from('.aboutme-intro', {
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
      stagger: 1,
    }).from('.icon', {
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
    });
  });

  return (
    <div className='aboutme section'>
      <h1 className='aboutme-intro'>About me</h1>
      <p className='aboutme-intro'>
        I am a full stack software engineer living in the Tampa Bay Area. I am
        passionate about creating beautiful products and solutions.
      </p>
      <p className='aboutme-intro'>
        In a previous life, I worked as an EMT, treating and transporting people
        to the hospital. When I am not coding, you can find me woodworking,
        lifting weights, or hanging out with my family.{' '}
      </p>
      <h1 className='aboutme-intro'>Skills</h1>
      <div className='skill-logos'>
        <img src={javascriptlogo} className='icon'></img>
        <img src={typescriptlogo} className='icon'></img>
        <img src={reactlogo} className='icon'></img>
        <img src={htmllogo} className='icon'></img>
        <img src={csslogo} className='icon'></img>
        <img src={nodelogo} className='icon'></img>
        <img src={sqllogo} className='icon'></img>
        <img src={mongologo} className='icon'></img>
        <img src={jestlogo} className='icon'></img>
        <img src={dockerlogo} className='icon'></img>
        <img src={redislogo} className='icon'></img>
        <img src={awslogo} className='icon'></img>
        <img src={gitlogo} className='icon'></img>
        <img src={whitegithublogo} className='icon'></img>
      </div>
    </div>
  );
};

export default Aboutme;
