import React, { useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";
import { Particles } from "@tsparticles/react";
import { useTheme } from "../context/ThemeContext";

const ParticleBackground = () => {
  const { isDarkMode } = useTheme();

  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing tsparticles");
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log("Particles container loaded", container);
  }, []);

  // Configuration based on the current theme
  const options = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fullScreen: false,
    fpsLimit: 120,
    particles: {
      color: {
        value: isDarkMode ? "#ffffff" : "#000000",
      },
      links: {
        color: isDarkMode ? "#ffffff" : "#000000",
        distance: 150,
        enable: true,
        opacity: isDarkMode ? 0.5 : 0.3,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: isDarkMode ? 0.8 : 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <div style={{ position: "fixed", width: "100%", height: "100%", top: 0, left: 0, zIndex: 0 }}>
      <Particles
        id="tsparticles"
        options={options}
        init={particlesInit}
        loaded={particlesLoaded}
      />
    </div>
  );
};

export default ParticleBackground; 