import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="py-16 text-white bg-gray-950" id="education">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="mb-6 text-4xl font-bold text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        
        <motion.div
          className="w-full p-6 mx-auto transition-all duration-300 bg-gray-800 border border-blue-400 shadow-lg md:w-3/4 rounded-xl hover:shadow-blue-500"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-blue-300">East Delta University</h3>
          <p className="text-gray-300 text-md">BSc in Computer Science and Engineering</p>
          <p className="text-sm text-gray-500">Chattogram, Bangladesh</p>
          <p className="text-sm text-gray-400">GPA: 3.57/4.00</p>
          <p className="text-sm">
            <strong className="text-blue-400">Scholarship:</strong> 33% BoT Grant Scholarship on Merit
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
