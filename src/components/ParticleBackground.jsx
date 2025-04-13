import React, { useEffect, useMemo, useState } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { useTheme } from "../context/ThemeContext";

const ParticleBackground = () => {
  const { isDarkMode } = useTheme();
  // Adding a key to force component remount when theme changes
  const [key, setKey] = useState(isDarkMode ? "dark" : "light");

  // Update key when theme changes
  useEffect(() => {
    setKey(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log("Particles loaded");
  };

  // Use useMemo to avoid recreating options object on every render
  const options = useMemo(() => {
    return {
      fullScreen: false,
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: isDarkMode ? "var(--color-text-primary)" : "var(--color-text-primary)",
        },
        links: {
          color: isDarkMode ? "var(--color-text-secondary)" : "var(--color-text-secondary)",
          distance: 150,
          enable: true,
          opacity: isDarkMode ? 0.5 : 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
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
          value: isDarkMode ? 0.5 : 0.3,
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
  }, [isDarkMode]);

  return (
    <Particles
      key={key} // Add key to force remount on theme change
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};

export default ParticleBackground; 