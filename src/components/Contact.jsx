import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Contact = () => {
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.fromTo(
      '.contact-cascade',
      {
        y: -50, // start 100px above
        opacity: 0,
      },
      {
        y: 0, // end at normal position
        opacity: 1,
        duration: 0.5,
        ease: 'back.out(1.4)', // ← this is the magic bounce when they land
        stagger: {
          amount: 0.6, // total cascade time for all cards
          from: 'start',
        },
      }
    );
  });

  return (
    <div className='contact-page section'>
      <form className='contact-form'>
        <h1 className='contact-title contact-cascade'>send me a message</h1>
        <label className='contact-label contact-cascade'>
          name
          <input className='contact-input contact-cascade'></input>
        </label>
        <label className='contact-label contact-cascade'>
          email
          <input className='contact-input contact-cascade'></input>
        </label>
        <label className='contact-label contact-cascade'>
          message
          <input className='contact-input contact-cascade'></input>
        </label>
        <button className='contact-button contact-cascade'>send message</button>
      </form>
    </div>
  );
};

export default Contact;
