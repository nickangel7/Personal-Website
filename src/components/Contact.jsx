import React from 'react';
import joshuatree from './assets/joshuatree.png';

const Contact = () => {
  return (
    <div className='contact-page section'>
      <form className='contact-form'>
        <h1 className='contact-title'>send me a message</h1>
        <label className='contact-label'>
          name
          <input></input>
        </label>
        <label className='contact-label'>
          email
          <input></input>
        </label>
        <label className='contact-label'>
          message
          <input></input>
        </label>
        <button></button>
      </form>
    </div>
  );
};

export default Contact;
