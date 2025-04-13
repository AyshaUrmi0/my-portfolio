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
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: isDarkMode ? "#ffffff" : "#2d3748",
      },
      links: {
        color: isDarkMode ? "#ffffff" : "#1e293b",
        distance: 150,
        enable: true,
        opacity: isDarkMode ? 0.5 : 0.7,
        width: isDarkMode ? 1 : 1.5,
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
        speed: 1.2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: isDarkMode ? 80 : 70,
      },
      opacity: {
        value: isDarkMode ? 0.8 : 0.9,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: isDarkMode ? 5 : 4 },
      },
    },
    detectRetina: true,
  };

  return (
    <div style={{ 
      position: "fixed", 
      width: "100%", 
      height: "100%", 
      top: 0, 
      left: 0, 
      zIndex: -1,
      pointerEvents: "none"
    }}>
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