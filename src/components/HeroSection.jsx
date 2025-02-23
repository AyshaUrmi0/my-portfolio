import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import DownloadResumeButton from './DownloadResumeButton';

const Banner = () => {
  return (
    <motion.div 
      className="relative flex flex-col items-center justify-center px-6 py-20 mt-6 overflow-hidden text-white md:px-12 md:flex-row bg-gradient-to-br from-gray-900 via-gray-950 to-black"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bg-blue-500 rounded-full w-96 h-96 -top-10 -left-10 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bg-purple-500 rounded-full w-96 h-96 -bottom-10 -right-10 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Left Section */}
      <motion.div
        className="relative w-full mb-8 md:w-1/2 md:mb-0"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="mb-4">
            <span className="block text-2xl font-light text-blue-400">Hello! My name is</span>
            <span className="block font-bold text-transparent text-7xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
              Aysha Urmi
            </span>
          </h1>

          <motion.p
            className="mb-6 text-2xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I love exploring new things!
          </motion.p>
          
          <motion.p
            className="mb-6 text-xl font-light leading-relaxed text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Over the past months, I have honed my skills in React, Node.js, MongoDB, and full-stack development.
          </motion.p>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          className="flex gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { icon: <FaGithub size={28} />, link: "https://github.com/AyshaUrmi0" },
            { icon: <FaLinkedin size={28} />, link: "https://www.linkedin.com/in/ayshaurmi/" },
            { icon: <FaX size={28} />, link: "https://x.com/aysha_urmi" },
            { icon: <FaMedium size={28} />, link: "https://medium.com/@ayshaismail021" },
          ].map(({ icon, link }, i) => (
            <motion.a
              key={i}
              href={link}
              className="p-3 text-gray-400 transition-all duration-300 rounded-full hover:text-blue-400 hover:bg-white/10"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <DownloadResumeButton />
        </motion.div>
      </motion.div>

      {/* Right Section with Image */}
      <motion.div
        className="relative flex justify-center w-full md:w-1/2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="relative">
          {/* Decorative ring */}
          <motion.div
            className="absolute inset-0 border-4 rounded-full border-blue-400/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.img
            src="https://i.ibb.co.com/ZzCfQZrH/Aysha-removebg-preview.png"
            alt="Profile"
            className="relative w-4/5 mx-auto border-4 rounded-full shadow-2xl border-blue-400/50"
            style={{
              filter: "brightness(1.2)",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;