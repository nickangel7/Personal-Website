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
        quantity: 3,
      },
    },
  },
  particles: {
    color: {
      value: '#01f8f4ff',
    },
    links: {
      // blink: true,
      // color: {
      //   value: '#01f8f4ff',
      // },
      // consent: false,
      // distance: 150,
      // enable: true,
      // opacity: 1,
      // shadow: {
      //   blur: 1,
      //   color: {
      //     value: 'lime',
      //   },
      //   enable: false,
      // },
      // width: 5,
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
      direction: 'left',
      enable: true,
      outModes: 'out',
      speed: {
        min: 1,
        max: 2,
      },
    },
    collisions: {
      enable: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 250,
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

export default particleStar;
