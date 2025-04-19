import { useState, useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineFolderOpen, AiOutlineBook, AiOutlineUser, AiOutlineTool, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import DownloadResumeButton from "./DownloadResumeButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);
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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.hamburger-button')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const navItems = [
    { name: "About", icon: <AiOutlineUser className="text-xl md:text-2xl" />, link: "#about" },
    { name: "Projects", icon: <AiOutlineFolderOpen className="text-xl md:text-2xl" />, link: "#projects" },
    { name: "Education", icon: <FaGraduationCap className="text-xl md:text-2xl" />, link: "#education" },
    { name: "Experience", icon: <FaBriefcase className="text-xl md:text-2xl" />, link: "#experience" },
    { name: "Skills", icon: <AiOutlineTool className="text-xl md:text-2xl" />, link: "#skills" },
    { name: "Contact", icon: <AiOutlineBook className="text-xl md:text-2xl" />, link: "#contact" }
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
    
    // Close menu if it's open
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* Regular navbar for md screens and above */}
      <motion.div 
        className="fixed top-0 left-0 right-0 mx-auto z-50 hidden md:flex items-center justify-center px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full transition-all duration-300"
        style={{
          background: 'rgba(23, 23, 33, 0.85)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          maxWidth: '90%',
          width: 'fit-content',
          margin: '0 auto'
        }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        {/* Main Dock Content */}
        <div className="flex items-center justify-center space-x-3 md:space-x-6 lg:space-x-8">
          {/* Home/Logo Button */}
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center justify-center space-x-1 md:space-x-2">
              <motion.div
                className="flex items-center justify-center p-2 md:p-2.5 lg:p-3 rounded-full"
                style={{
                  background: 'rgba(59, 130, 246, 0.2)'
                }}
              >
                <AiOutlineHome className="w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 text-blue-500" />
              </motion.div>
              <span className="font-medium text-sm md:text-base text-white">Home</span>
            </Link>
          </motion.div>

          {/* Navigation Items */}
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.link}
                onClick={(e) => location.pathname !== '/' && handleNavigation(e, item.link)}
                className="flex items-center justify-center space-x-1 md:space-x-2"
              >
                <motion.div
                  className="flex items-center justify-center p-2 md:p-2.5 lg:p-3 rounded-full"
                  style={{
                    background: 'rgba(59, 130, 246, 0.2)'
                  }}
                >
                  {item.icon}
                </motion.div>
                <span className="font-medium text-sm md:text-base text-white">{item.name}</span>
              </Link>
            </motion.div>
          ))}

          {/* Resume Button */}
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/Aysha_Akter_Urmi_CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1 md:space-x-2"
            >
              <motion.div
                className="flex items-center justify-center p-2 md:p-2.5 lg:p-3 rounded-full"
                style={{
                  background: 'rgba(59, 130, 246, 0.2)'
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="12" y1="18" x2="12" y2="12"></line>
                  <line x1="9" y1="15" x2="15" y2="15"></line>
                </svg>
              </motion.div>
              <span className="font-medium text-sm md:text-base text-white">Resume</span>
            </Link>
          </motion.div>
        </div>

        {/* Progress Bar - Moved to bottom */}
        <div 
          className="absolute bottom-0 left-0 h-1 md:h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-full" 
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </motion.div>

      {/* Mobile navbar with hamburger */}
      <motion.div 
        className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between px-4 py-3"
        style={{
          background: 'rgba(23, 23, 33, 0.85)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo/Home */}
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            className="flex items-center justify-center p-2 rounded-full"
            style={{ background: 'rgba(59, 130, 246, 0.2)' }}
          >
            <AiOutlineHome className="w-5 h-5 text-blue-500" />
          </motion.div>
          <span className="font-medium text-base text-white">Aysha Urmi</span>
        </Link>
        
        {/* Hamburger button */}
        <motion.button
          className="hamburger-button p-2 rounded-full bg-blue-500/20 text-white"
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </motion.button>

        {/* Progress Bar - Moved to bottom */}
        <div 
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" 
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </motion.div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu fixed inset-0 z-40 flex md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              className="absolute top-0 right-0 w-3/4 h-full bg-bg-secondary/95 backdrop-blur-md p-4 pt-16 overflow-y-auto shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
            >
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 p-2 rounded-full bg-blue-500/20 text-white"
                onClick={() => setMenuOpen(false)}
              >
                <AiOutlineClose size={20} />
              </button>
              
              {/* Mobile menu items */}
              <div className="flex flex-col space-y-4">
                {/* Home item */}
                <Link 
                  to="/" 
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-500/10 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="bg-blue-500/20 p-2 rounded-full">
                    <AiOutlineHome className="text-blue-500 text-xl" />
                  </div>
                  <span className="font-medium text-white">Home</span>
                </Link>
                
                {/* Navigation items */}
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    onClick={(e) => handleNavigation(e, item.link)}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-500/10 transition-colors"
                  >
                    <div className="bg-blue-500/20 p-2 rounded-full">
                      {item.icon}
                    </div>
                    <span className="font-medium text-white">{item.name}</span>
                  </Link>
                ))}
                
                {/* Resume link */}
                <Link 
                  to="/Aysha_Akter_Urmi_CV.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-500/10 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="bg-blue-500/20 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="12" y1="18" x2="12" y2="12"></line>
                      <line x1="9" y1="15" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <span className="font-medium text-white">Resume</span>
                </Link>
              </div>
              
              {/* Social links */}
              <div className="mt-8 flex justify-center space-x-4">
                <a 
                  href="https://github.com/AyshaUrmi0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-500/10 rounded-full text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/ayshaurmi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-500/10 rounded-full text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a 
                  href="https://x.com/aysha_urmi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-500/10 rounded-full text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                  </svg>
                </a>
                <a 
                  href="https://medium.com/@ayshaismail021" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-500/10 rounded-full text-white"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
