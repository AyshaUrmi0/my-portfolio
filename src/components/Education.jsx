import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaAward } from "react-icons/fa";

const Education = () => {
    return (
        <div className="py-8 sm:py-12 md:py-16 text-center bg-transparent" id="education">
            <motion.h2 
                className="relative inline-block mb-8 sm:mb-10 md:mb-12 text-3xl sm:text-4xl font-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="relative z-10 text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text flex items-center justify-center gap-2">
                    <FaGraduationCap className="text-2xl sm:text-3xl" />
                    Education
                </span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-accent/10 rounded-lg -z-10"></span>
            </motion.h2>
            
            <div className="relative mx-auto w-28 h-1 mb-10">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
                <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full" 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                ></motion.span>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 px-4 sm:px-6">
                <motion.div
                    className="w-full p-4 sm:p-6 md:p-8 mx-auto transition-all duration-300 bg-bg-secondary/80 backdrop-blur-sm border border-accent/30 shadow-lg md:w-3/4 rounded-xl hover:shadow-accent/20 hover:border-accent/50 group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-4">
                        <div className="p-2 sm:p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                            <FaUniversity className="text-xl sm:text-2xl text-accent" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-accent text-center sm:text-left">East Delta University</h3>
                    </div>
                    
                    <div className="space-y-2 sm:space-y-3 text-left">
                        <p className="text-text-primary text-base sm:text-lg font-medium flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                            BSc in Computer Science and Engineering
                        </p>
                        <p className="text-text-secondary text-xs sm:text-sm flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent/50"></span>
                            Chattogram, Bangladesh
                        </p>
                        <p className="text-text-secondary text-xs sm:text-sm flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent/50"></span>
                            GPA: 3.57/4.00
                        </p>
                        <p className="text-xs sm:text-sm flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent/50"></span>
                            <strong className="text-accent">Scholarship:</strong> 
                            <span className="break-words">33% BoT Grant Scholarship on Merit</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Education;
