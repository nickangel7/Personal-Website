const particleStar = {
  key: 'reactNightSky',
  name: 'React Night Sky',
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
    },
    modes: {
      push: {
        quantity: 1,
      },
    },
  },
  particles: {
    color: {
      value: '#01f8f4ff',
    },
    links: {
      blink: false,
      color: {
        value: '#080707ff',
      },
      consent: false,
      distance: 150,
      enable: true,
      opacity: 0.02,
      shadow: {
        blur: 5,
        color: {
          value: 'lime',
        },
        enable: false,
      },
      width: 1,
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 3000,
          y: 3000,
        },
      },
      direction: 'left',
      enable: true,
      outModes: 'bounce',
      speed: 1,
    },
    collisions: {
      enable: true,
    },
    number: {
      density: {
        enable: true,
      },
      value: 60,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
      value: {
        min: 0.05,
        max: 0.5,
      },
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: 5,
    },
  },
  pauseOnBlur: true,
  // background: {
  //   color: '#f8f4f4ff',
  //   image: '',
  //   position: '50% 50%',
  //   repeat: 'no-repeat',
  //   size: 'cover',
  // },
};

export default particleStar;
