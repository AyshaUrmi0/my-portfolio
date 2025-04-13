import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBackground = ({ isDarkMode = true }) => {
  const particlesInit = useCallback(async (engine) => {
    // Initialize the tsParticles instance
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Container loaded
  }, []);

  // Configuration for dark mode
  const darkConfig = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#3b82f6", "#8b5cf6", "#60a5fa", "#93c5fd"]
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        }
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: {
          enable: true,
          speed: 0.5,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#60a5fa",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.4
          }
        },
        push: {
          particles_nb: 3
        }
      }
    },
    retina_detect: true,
    background: {
      color: "transparent",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    }
  };

  // Configuration for light mode
  const lightConfig = {
    ...darkConfig,
    particles: {
      ...darkConfig.particles,
      color: {
        value: ["#3b82f6", "#8b5cf6", "#4f46e5", "#6366f1"]
      },
      opacity: {
        ...darkConfig.particles.opacity,
        value: 0.4
      },
      line_linked: {
        ...darkConfig.particles.line_linked,
        color: "#3b82f6",
        opacity: 0.3
      }
    }
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={isDarkMode ? darkConfig : lightConfig}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -10, // Behind all content
        pointerEvents: 'none' // Allow interaction with elements behind
      }}
    />
  );
};

export default ParticleBackground; 