import React from "react";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <div className="py-16 text-center bg-transparent" id="education">
            <motion.h2 
                className="mb-8 text-4xl font-bold text-accent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Education
            </motion.h2>
            
            <div className="flex flex-col items-center justify-center space-y-8">
                <motion.div
                    className="w-full p-6 mx-auto transition-all duration-300 bg-bg-secondary/80 backdrop-blur-sm border border-accent shadow-lg md:w-3/4 rounded-xl hover:shadow-accent/20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-accent">Chattogram University of Engineering and Technology</h3>
                    <p className="text-lg font-medium text-text-primary">B.Sc in Computer Science & Engineering</p>
                    <p className="mt-2 text-text-secondary">January 2021 - Present</p>
                    <p className="mt-4 text-text-secondary">I am currently in my final year of Computer Science & Engineering program, focusing on full-stack development, artificial intelligence, and data structures.</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Education;
