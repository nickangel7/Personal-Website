import { useRef } from 'react';
import playbutton from './assets/playbutton.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../style.css';

gsap.registerPlugin(useGSAP);
let isClicked = 'false';

const Introduction = () => {
  
  const playButtonRef = useRef();

  const isFirstVisit = !sessionStorage.getItem('firstVisitDone');

  let tl = gsap.timeline();

  useGSAP(() => {
    tl.from('.letters', {
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.1,
    })
      .from('.introname', {
        height: 0,
        duration: 1,
      })
      .from('.text-display', {
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.1,
      });
    if (isClicked == 'false') {
      tl.to('.playbutton', {
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1,
      });
    }
    if (isFirstVisit) {
      tl.from(
        'header',
        {
          y: -150,
        },
        '<'
      );
      tl.from(
        'footer',
        {
          y: 150,
        },
        '<'
      );
      sessionStorage.setItem('firstVisitDone', 'true');
    }
  });

  const playButtonClick = () => {
    tl.to('.tsparticles', {
      opacity: 1,
      duration: 1,
    })
      .to(playButtonRef.current, {
        opacity: 0,
        duration: 1,
      })
      .to(
        '.logo',
        {
          rotation: -360,
          duration: 20,
          repeat: -1,
          ease: 'none',
        },
        '<'
      );
    isClicked = 'true';
  };

  return (
    <section className='introduction section'>
      <div className='intro_wrapper'>
        <div className='initintro'>
          <span className='letters'>h</span>
          <span className='letters'>e</span>
          <span className='letters'>l</span>
          <span className='letters'>l</span>
          <span className='letters'>o</span>
          <span className='letters'>,</span>
          <span className='letters'>&nbsp;</span>
          <span className='letters'>m</span>
          <span className='letters'>y</span>
          <span className='letters'>&nbsp;</span>
          <span className='letters'>n</span>
          <span className='letters'>a</span>
          <span className='letters'>m</span>
          <span className='letters'>e</span>
          <span className='letters'>&nbsp;</span>
          <span className='letters'>i</span>
          <span className='letters'>s</span>
        </div>
        <div className='introname'>
          <span>
            <span>n</span>
            <span>i</span>
            <span>c</span>
            <span>k</span>
            <span>&nbsp;</span>
          </span>
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
          <span className='text-display'>
            <span>s</span>
            <span>o</span>
            <span>f</span>
            <span>t</span>
            <span>w</span>
            <span>a</span>
            <span>r</span>
            <span>e</span>
            <span>&nbsp;</span>
          </span>
          <span className='text-display'>
            <span>e</span>
            <span>n</span>
            <span>g</span>
            <span>i</span>
            <span>n</span>
            <span>e</span>
            <span>e</span>
            <span>r</span>
          </span>
        </div>
      </div>
      <div className='playbutton'>
        <img
          ref={playButtonRef}
          src={playbutton}
          alt='playbutton'
          className='playbutton'
          onClick={playButtonClick}
          onHover=''
        />
      </div>
    </section>
  );
};

export default Introduction;
