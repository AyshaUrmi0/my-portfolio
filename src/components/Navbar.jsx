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
  const [scrolledNav, setScrolledNav] = useState(false);
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
      
      // Add background when scrolled
      if (scrollPosition > 50) {
        setScrolledNav(true);
      } else {
        setScrolledNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: "About", icon: <AiOutlineUser className="text-xl" />, link: "#about" },
    { name: "Skills", icon: <AiOutlineTool className="text-xl" />, link: "#skills" },
    { name: "Projects", icon: <AiOutlineFolderOpen className="text-xl" />, link: "#projects" },
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
      className={`fixed top-0 left-0 z-50 flex items-center justify-between w-full px-6 py-3 transition-all duration-300 ${
        scrolledNav 
          ? 'bg-bg-secondary/95 backdrop-blur-md shadow-lg' 
          : 'bg-bg-secondary/50 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" 
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Left Side - Logo/Name */}
      <motion.div 
        className="text-xl font-bold"
        whileHover={{ scale: 1.05 }}
      >
        <Link to="/" className="relative group">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            AyshaUrmi
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
      </motion.div>

      {/* Center - Navigation Links (Large Screens) */}
      <div className="absolute hidden transform -translate-x-1/2 lg:flex left-1/2">
        <ul className="flex space-x-6">
          {navItems.map((item, index) => (
            <motion.li key={index} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <Link
                to={item.link}
                onClick={(e) => location.pathname !== '/' && handleNavigation(e, item.link)}
                className="relative flex items-center px-4 py-2 space-x-2 font-medium text-text-primary transition-all duration-300 rounded-full hover:text-accent group"
              >
                <span className="transition-all duration-300 group-hover:scale-110">{item.icon}</span>
                <span>{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Right Side - Download Resume Button and Theme Toggle */}
      <div className="hidden lg:flex items-center space-x-4">
        {/* Theme toggle button */}
        <motion.button
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-bg-secondary hover:bg-accent/20 text-text-primary transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? 
            <FaSun className="text-yellow-300" /> : 
            <FaMoon className="text-blue-300" />
          }
        </motion.button>
        
        <DownloadResumeButton />
      </div>

      {/* Hamburger Menu (Small Screens) */}
      <div className="lg:hidden flex items-center space-x-4">
        {/* Theme toggle button for mobile */}
        <motion.button
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-bg-secondary hover:bg-accent/20 text-text-primary transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? 
            <FaSun className="text-yellow-300" /> : 
            <FaMoon className="text-blue-300" />
          }
        </motion.button>
        
        <button
          className="relative w-10 h-10 overflow-hidden transition-all duration-300 focus:outline-none group"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="flex flex-col items-center justify-center w-6 h-6 mx-auto space-y-1.5">
            <motion.span 
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            ></motion.span>
            <motion.span 
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            ></motion.span>
            <motion.span 
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            ></motion.span>
          </div>
        </button>
      </div>

      {/* Dropdown menu for smaller screens */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="absolute left-0 w-full backdrop-blur-lg bg-bg-secondary/95 shadow-lg lg:hidden top-16 rounded-b-xl overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul 
              className="flex flex-col gap-3 p-4 text-center"
            >
              {navItems.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.link}
                    onClick={(e) => {
                      setMenuOpen(false);
                      location.pathname !== '/' && handleNavigation(e, item.link);
                    }}
                    className="flex items-center justify-center w-full px-4 py-3 space-x-3 font-medium text-text-primary transition-all duration-300 rounded-lg bg-bg-primary/50 hover:bg-accent/20 hover:text-accent"
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-2"
              >
                <DownloadResumeButton />
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
