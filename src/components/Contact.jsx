import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9byr52e', 'template_lmn9g8k', form.current, {
        publicKey: 'xhBv4HjjHP96GRMC2',
      })
      .then(
        () => {
          console.log('successful email');
          form.current.reset();
        },
        (error) => {
          console.log('email failed');
        }
      );
  };

  return (
    <div className='contact-page section'>
      <form className='contact-form' ref={form} onSubmit={sendEmail}>
        <h1 className='contact-title contact-cascade'>send me a message</h1>
        <label className='contact-label contact-cascade'>
          name
          <input
            className='contact-input contact-cascade'
            type='text'
            name='name'
          ></input>
        </label>
        <label className='contact-label contact-cascade'>
          email
          <input
            className='contact-input contact-cascade'
            type='email'
            name='from-email'
          ></input>
        </label>
        <label className='contact-label contact-cascade'>
          message
          <input
            className='contact-input contact-cascade'
            name='message'
          ></input>
        </label>
        <button
          className='contact-button contact-cascade'
          type='submit'
          value='Send'
        >
          send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
