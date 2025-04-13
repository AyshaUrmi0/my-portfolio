import { useState, useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineFolderOpen, AiOutlineBook, AiOutlineUser, AiOutlineTool } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import DownloadResumeButton from "./DownloadResumeButton";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  // Update scroll progress for the progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = Math.min(scrollPosition / totalHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: "About", icon: <AiOutlineUser className="text-xl" />, link: "#about" },
    { name: "Projects", icon: <AiOutlineFolderOpen className="text-xl" />, link: "#projects" },
    { name: "Skills", icon: <AiOutlineTool className="text-xl" />, link: "#skills" },
    { name: "Contact", icon: <AiOutlineBook className="text-xl" />, link: "#contact" }
  ];

  // Handle navigation with proper routing when on a subpage
  const handleNavigation = (e, link) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/');
      // Small delay to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.querySelector(link);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <motion.div 
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center px-4 py-2 rounded-full transition-all duration-300"
      style={{
        background: isDarkMode 
          ? 'rgba(23, 23, 33, 0.8)' 
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(12px)',
        boxShadow: isDarkMode 
          ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
          : '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      {/* Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-full" 
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Main Dock Content */}
      <div className="flex items-center justify-center space-x-1 md:space-x-2">
        {/* Home/Logo Button */}
        <motion.div 
          className="relative group"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onHoverStart={() => setHoveredItem("home")}
          onHoverEnd={() => setHoveredItem(null)}
        >
          <Link to="/" className="flex flex-col items-center justify-center">
            <motion.div
              className="flex items-center justify-center p-2 text-xl font-bold rounded-full"
              style={{
                background: isDarkMode 
                  ? 'rgba(59, 130, 246, 0.2)' 
                  : 'rgba(59, 130, 246, 0.1)'
              }}
            >
              <AiOutlineHome className="w-5 h-5 text-blue-500" />
            </motion.div>
            <AnimatePresence>
              {hoveredItem === "home" && (
                <motion.span
                  className="absolute text-xs font-medium -top-6 bg-bg-secondary/90 text-text-primary px-2 py-1 rounded-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  Home
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        </motion.div>

        {/* Navigation Items */}
        {navItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative group"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onHoverStart={() => setHoveredItem(item.name)}
            onHoverEnd={() => setHoveredItem(null)}
          >
            <Link
              to={item.link}
              onClick={(e) => location.pathname !== '/' && handleNavigation(e, item.link)}
              className="flex flex-col items-center justify-center"
            >
              <motion.div
                className="flex items-center justify-center p-2 rounded-full"
                style={{
                  background: isDarkMode 
                    ? 'rgba(59, 130, 246, 0.2)' 
                    : 'rgba(59, 130, 246, 0.1)'
                }}
              >
                {item.icon}
              </motion.div>
              <AnimatePresence>
                {hoveredItem === item.name && (
                  <motion.span
                    className="absolute text-xs font-medium -top-6 bg-bg-secondary/90 text-text-primary px-2 py-1 rounded-md"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </motion.div>
        ))}

        {/* Theme Toggle */}
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onHoverStart={() => setHoveredItem("theme")}
          onHoverEnd={() => setHoveredItem(null)}
        >
          <button
            onClick={toggleTheme}
            className="flex flex-col items-center justify-center"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <motion.div
              className="flex items-center justify-center p-2 rounded-full"
              style={{
                background: isDarkMode 
                  ? 'rgba(59, 130, 246, 0.2)' 
                  : 'rgba(59, 130, 246, 0.1)'
              }}
            >
              {isDarkMode ? 
                <FaSun className="w-5 h-5 text-yellow-300" /> : 
                <FaMoon className="w-5 h-5 text-blue-300" />
              }
            </motion.div>
            <AnimatePresence>
              {hoveredItem === "theme" && (
                <motion.span
                  className="absolute text-xs font-medium -top-6 bg-bg-secondary/90 text-text-primary px-2 py-1 rounded-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.div>

        {/* Resume Button */}
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onHoverStart={() => setHoveredItem("resume")}
          onHoverEnd={() => setHoveredItem(null)}
        >
          <motion.div
            className="flex items-center justify-center p-2 rounded-full"
            style={{
              background: isDarkMode 
                ? 'rgba(59, 130, 246, 0.2)' 
                : 'rgba(59, 130, 246, 0.1)'
            }}
          >
            <Link to="/Aysha_Akter_Urmi_CV.pdf" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="12" y1="18" x2="12" y2="12"></line>
                <line x1="9" y1="15" x2="15" y2="15"></line>
              </svg>
            </Link>
          </motion.div>
          <AnimatePresence>
            {hoveredItem === "resume" && (
              <motion.span
                className="absolute text-xs font-medium -top-6 bg-bg-secondary/90 text-text-primary px-2 py-1 rounded-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                Resume
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
