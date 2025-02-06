import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaMedium } from 'react-icons/fa';
import DownloadResumeButton from './DownloadResumeButton';
import { FaX } from 'react-icons/fa6';

const Banner = () => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center px-6 py-16 mt-6 text-white md:px-12 md:flex-row bg-gray-950"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Left Section */}
      <motion.div
        className="w-full mb-8 md:w-1/2 md:mb-0"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="mb-4 font-bold">
  <span className="block text-2xl">Hello! My name is</span>
  <span className="text-blue-400 text-7xl">Aysha Urmi</span>
</h1>

        <motion.p
          className="mb-6 text-2xl font-bold text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I love exploring new things!
        </motion.p>
        <motion.p
          className="mb-6 text-2xl font-thin text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
 Over the past months, I have honed my skills in React, Node.js, MongoDB, and full-stack development, while also exploring machine learning techniques. 
 <br />
 I enjoy learning new technologies and applying them to real-world projects, constantly challenging myself to build efficient, scalable, and user-centric solutions.        </motion.p>

        {/* Social Icons */}
        <motion.div className="flex gap-6 mt-4">
          {[
            { icon: <FaGithub size={24} />, link: "https://github.com/AyshaUrmi0" },
            { icon: <FaLinkedin size={24} />, link: "https://www.linkedin.com/in/ayshaurmi/" },
            { icon: <FaX size={24} />, link: "https://x.com/aysha_urmi" },
            { icon: <FaMedium size={24} />, link: "https://medium.com/@ayshaismail021" },
          ].map(({ icon, link }, i) => (
            <motion.a
              key={i}
              href={link}
              className="text-gray-400 transition duration-300 hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#60a5fa' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      
        <div className="mt-6">
          <DownloadResumeButton />
        </div>
      </motion.div>

      {/* Right Section with Image */}
      <motion.div
        className="flex justify-center w-full md:w-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
         <motion.img
  src="https://i.ibb.co.com/RTf509XH/Aysha.jpg"
  alt="Profile"
  className="w-3/5 border-4 border-blue-400 rounded-full shadow-lg h-90 "
  style={{
    filter: "brightness(1.2)",
  }}
  animate={{
    //scale: [1, 1.2, 1], // Zoom in and out effect
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    //repeatType: "reverse", // Reverses the zoom effect
  }}
/>

        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
