import React from 'react';
import { motion } from "framer-motion";
import { FaBook, FaCode, FaPaintBrush, FaPuzzlePiece, FaUsers } from "react-icons/fa";

const AboutMe = () => {
    const hobbies = [
        { icon: <FaCode />, text: "Coding" },
        { icon: <FaBook />, text: "Reading" },
        { icon: <FaPaintBrush />, text: "Painting & Crafting" },
        { icon: <FaPuzzlePiece />, text: "Problem Solving" },
        { icon: <FaUsers />, text: "Team Management & Mentoring" },
    ];

    return (
        <div className="relative px-6 py-20 overflow-hidden md:px-12 bg-gradient-to-b from-gray-900 to-black" id="about">
            {/* Background Animation */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute bg-blue-500 rounded-full w-96 h-96 -top-10 -right-10 mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute bg-purple-500 rounded-full w-96 h-96 -bottom-10 -left-10 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <motion.div
                className="relative max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h2
                    className="mb-8 text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    About Me
                </motion.h2>
                <motion.p
                    className="mb-6 text-lg leading-relaxed text-gray-300"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Hello! I'm <span className="font-bold text-blue-400">Urmi</span>, a passionate web developer from Bangladesh.  
                    With a strong foundation in <span className="font-medium text-purple-400">React</span>, <span className="font-medium text-purple-400">Node.js</span>, and <span className="font-medium text-purple-400">Firebase</span>, 
                    I love building user-friendly, scalable web applications that bring ideas to life.
                </motion.p>
                <motion.p
                    className="mb-8 text-lg leading-relaxed text-gray-300"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    I'm a dedicated, goal-oriented individual with a passion for learning and problem-solving. 
                    Alongside coding, I enjoy <span className="font-medium text-blue-400">exploring new technologies</span>, <span className="font-medium text-blue-400">reading books</span>, and <span className="font-medium text-blue-400">discovering new places</span>.  
                    I thrive in collaborative environments and always strive to improve my skills.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-12"
                >
                    <h3 className="mb-8 text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text">
                        Things I Love
                    </h3>
                    <div className="grid justify-center grid-cols-2 gap-6 sm:grid-cols-3">
                        {hobbies.map((hobby, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center p-6 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-800/70 hover:shadow-lg hover:shadow-blue-500/10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            >
                                <div className="text-3xl text-blue-400">{hobby.icon}</div>
                                <p className="mt-3 text-lg font-medium text-gray-200">{hobby.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.a
                    href="#contact"
                    className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Let's Connect
                </motion.a>
            </motion.div>
        </div>
    );
};

export default AboutMe;