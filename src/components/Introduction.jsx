import React from 'react';
import playbutton from './assets/playbutton.png';
import '../style.css';

const Introduction = () => {
  return (
    <section className='introduction section'>
      <div className='intro_wrapper'>
        <div className='initintro'>
          <span>h</span>
          <span>e</span>
          <span>l</span>
          <span>l</span>
          <span>o</span>
          <span>,</span>
          <span>&nbsp;</span>
          <span>m</span>
          <span>y</span>
          <span>&nbsp;</span>
          <span>n</span>
          <span>a</span>
          <span>m</span>
          <span>e</span>
          <span>&nbsp;</span>
          <span>i</span>
          <span>s</span>
        </div>
        <div className='introname'>
          <span>n</span>
          <span>i</span>
          <span>c</span>
          <span>k</span>
          <span>&nbsp;</span>
          <span>a</span>
          <span>n</span>
          <span>g</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>o</span>
          <span>u</span>
          <span>l</span>
          <span>o</span>
          <span>s</span>
        </div>
        <div className='occupation'>
          <span>s</span>
          <span>o</span>
          <span>f</span>
          <span>t</span>
          <span>w</span>
          <span>a</span>
          <span>r</span>
          <span>e</span>
          <span>&nbsp;</span>
          <span>e</span>
          <span>n</span>
          <span>g</span>
          <span>i</span>
          <span>n</span>
          <span>e</span>
          <span>e</span>
          <span>r</span>
        </div>
      </div>
      <div className='playbutton'>
        <img src={playbutton} alt='playbutton' className='playbutton' />
      </div>
    </section>
  );
};

export default Introduction;
