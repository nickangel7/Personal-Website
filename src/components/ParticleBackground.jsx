import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import particlesStar from '../config/particlesStar.js';
import particleStar2 from '../config/particleStar2.js';
import particleStar3 from '../config/particleStar3.js';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* LAYER 1: Small dense → bottom-right */}
      <Particles
        id='small-dust'
        init={particlesInit}
        options={particlesStar}
        style={layerStyle}
      />

      {/* LAYER 2: Medium → top-left */}
      <Particles
        id='medium-flow'
        init={particlesInit}
        options={particleStar2}
        style={layerStyle}
      />

      {/* LAYER 3: Large glowing → top-left (slow) */}
      <Particles
        id='large-stars'
        init={particlesInit}
        options={particleStar3}
        style={layerStyle}
      />
    </div>
  );
};

const layerStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
};

export default ParticleBackground;
