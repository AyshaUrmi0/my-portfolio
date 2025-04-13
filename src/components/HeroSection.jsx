import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaReact, FaNodeJs } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { SiNextdotjs, SiTypescript, SiMongodb } from 'react-icons/si';
import DownloadResumeButton from './DownloadResumeButton';

const Banner = () => {
  return (
    <div className="relative overflow-hidden">
      <motion.div 
        className="relative flex flex-col items-center justify-center px-6 py-20 overflow-hidden md:px-12 md:flex-row bg-transparent text-text-primary min-h-[90vh]"
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
          className="relative z-10 w-full mb-8 md:w-1/2 md:mb-0"
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
              <motion.span 
                className="block text-2xl font-light text-accent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hello! My name is
              </motion.span>
              <motion.span 
                className="block font-bold text-transparent text-7xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Aysha Urmi
              </motion.span>
            </h1>

            <motion.p
              className="mb-6 text-2xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="inline-block">I</span>
              <span className="inline-block ml-2">love</span>
              <span className="inline-block ml-2">exploring</span>
              <span className="inline-block ml-2">new</span>
              <span className="inline-block ml-2">things!</span>
            </motion.p>
            
            <motion.p
              className="mb-6 text-xl font-light leading-relaxed text-text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Over the past months, I have honed my skills in React, Node.js, MongoDB, and full-stack development. Now I am exploring Next.js and Typescript.
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
                className="p-3 text-text-primary transition-all duration-300 rounded-full hover:text-accent hover:bg-bg-secondary/50 backdrop-blur-md"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
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
            whileHover={{ scale: 1.05 }}
          >
            <DownloadResumeButton />
          </motion.div>
        </motion.div>

        {/* Right Section with Image */}
        <motion.div
          className="relative z-10 flex justify-center w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="relative">
            {/* Decorative rings */}
            <motion.div
              className={`absolute inset-0 border-4 rounded-full ${
                "border-accent/50"
              }`}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div
              className={`absolute inset-0 border-4 rounded-full ${
                "border-accent/20"
              }`}
              style={{ margin: "-10px" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.img
              src="https://i.ibb.co.com/ZzCfQZrH/Aysha-removebg-preview.png"
              alt="Profile"
              className="relative w-4/5 mx-auto border-4 rounded-full shadow-2xl border-accent/50"
              style={{
                filter: "brightness(1.2)",
              }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 25px rgba(37, 99, 235, 0.6)` }}
              transition={{ duration: 0.3 }}
            />

            {/* Floating badges */}
            <motion.div 
              className="absolute top-0 -right-4 bg-sky-500 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm shadow-md flex items-center gap-1"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaReact className="text-white" size={14} />
              React
            </motion.div>
            <motion.div 
              className="absolute -bottom-2 -left-4 bg-green-600 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm shadow-md flex items-center gap-1"
              initial={{ y: 0 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <SiMongodb className="text-white" size={14} />
              MongoDB
            </motion.div>
            <motion.div 
              className="absolute top-1/2 -right-8 bg-green-600/90 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm shadow-md flex items-center gap-1"
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <FaNodeJs className="text-white" size={14} />
              Node.js
            </motion.div>
            <motion.div 
              className="absolute top-1/3 -left-8 bg-black/90 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm shadow-md flex items-center gap-1"
              initial={{ y: 0 }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            >
              <SiNextdotjs className="text-white" size={14} />
              Next.js
            </motion.div>
            <motion.div 
              className="absolute bottom-1/3 right-0 bg-blue-500/90 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm shadow-md flex items-center gap-1"
              initial={{ y: 0 }}
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            >
              <SiTypescript className="text-white" size={14} />
              TypeScript
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;