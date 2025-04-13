import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Education = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="py-16  text-text-primary" id="education">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="mb-6 text-4xl font-bold text-accent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        
        <motion.div
          className="w-full p-6 mx-auto transition-all duration-300 bg-bg-secondary border border-accent shadow-lg md:w-3/4 rounded-xl hover:shadow-accent/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-accent">East Delta University</h3>
          <p className="text-text-primary text-md">BSc in Computer Science and Engineering</p>
          <p className="text-text-secondary text-sm">Chattogram, Bangladesh</p>
          <p className="text-text-secondary text-sm">GPA: 3.57/4.00</p>
          <p className="text-sm">
            <strong className="text-accent">Scholarship:</strong> 33% BoT Grant Scholarship on Merit
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
