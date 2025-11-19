const particleStar2 = {
  key: 'reactNightSky',
  name: 'React Night Sky',
  interactivity: {
    modes: {
      push: {
        quantity: 3,
      },
    },
  },
  particles: {
    color: {
      value: '#01f8f4ff',
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 3000,
          y: 3000,
        },
      },
      straight: true,
      direction: 'top-left',
      enable: true,
      outModes: 'out',
      speed: .7,
    },
    collisions: {
      enable: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 150,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 0.5,
        sync: true,
      },
      value: {
        min: 0.1,
        max: 1,
      },
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: 1.5,
    },
  },
  pauseOnBlur: true,
};

export default particleStar2;
