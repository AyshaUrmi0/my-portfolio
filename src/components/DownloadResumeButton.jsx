import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const DownloadResumeButton = () => {
  return (
    <motion.a
      href="/Aysha_Akter_Urmi_CV.pdf"
      download="Aysha_Akter_Urmi_CV.pdf"
      className="relative inline-flex items-center px-6 py-2.5 text-sm font-medium overflow-hidden rounded-full group bg-bg-secondary text-text-primary hover:text-text-primary"
      whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)' }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated background */}
      <span className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-600 to-purple-600"></span>
      
      {/* Content */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600/80 to-purple-600/80 blur-md"></span>
      <span className="absolute inset-0 w-full h-full opacity-50 bg-gradient-to-r from-blue-600 to-purple-600"></span>
      
      {/* Text and icon with higher z-index */}
      <span className="relative z-10 flex items-center text-white">
        <FaDownload className="mr-2" />
        Download CV
      </span>
      
      {/* Shiny effect on hover */}
      <span className="absolute top-0 block w-1/2 h-full transform -skew-x-12 -inset-full z-5 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
    </motion.a>
  );
};

export default DownloadResumeButton;
