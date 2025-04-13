import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { FaBook, FaCode, FaPaintBrush, FaPuzzlePiece, FaUsers, FaLaptopCode } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { useTheme } from '../context/ThemeContext';

const AboutMe = () => {
    const canvasRef = useRef(null);
    const { isDarkMode } = useTheme();
    
    // Particle animation effect - similar to HeroSection
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let particles = [];
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.5;
                this.speedX = Math.random() * 0.3 - 0.15;
                this.speedY = Math.random() * 0.3 - 0.15;
                
                // Use theme-compatible colors
                const r = Math.floor(Math.random() * 50 + 100);
                const g = Math.floor(Math.random() * 50 + 150);
                const b = Math.floor(Math.random() * 100 + 200);
                const a = Math.random() * 0.2 + 0.1;
                this.color = `rgba(${r}, ${g}, ${b}, ${a})`;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }
            
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        const init = () => {
            particles = [];
            const particleCount = Math.min(80, Math.floor(canvas.width * canvas.height / 18000));
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };
        
        const connectParticles = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(100, 150, 255, ${0.05 * (1 - distance/120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };
        
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            
            connectParticles();
            requestAnimationFrame(animate);
        };
        
        init();
        animate();
        
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    const hobbies = [
        { icon: <FaCode />, text: "Coding" },
        { icon: <FaBook />, text: "Reading" },
        { icon: <FaPaintBrush />, text: "Painting & Crafting" },
        { icon: <FaPuzzlePiece />, text: "Problem Solving" },
        { icon: <FaUsers />, text: "Team Management & Mentoring" },
        { icon: <FaLaptopCode />, text: "Learning New Tech" },
    ];

    const skills = [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
    ];

    return (
        <div className="relative px-6 py-20 overflow-hidden md:px-12 bg-bg-primary" id="about">
            {/* Particle background */}
            <canvas ref={canvasRef} className="absolute inset-0 z-0" />

            {/* Background Animation - kept from original */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute bg-blue-500 rounded-full w-96 h-96 -top-10 -right-10 mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute bg-purple-500 rounded-full w-96 h-96 -bottom-10 -left-10 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <motion.div
                className="relative z-10 max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="relative inline-block mb-8 text-4xl font-bold"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="relative z-10 text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">About Me</span>
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
                </motion.div>

                <motion.div
                    className="grid gap-8 md:grid-cols-2 items-center bg-bg-secondary/20 backdrop-blur-sm rounded-2xl p-6 border border-accent/10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="text-left space-y-6">
                        <motion.p
                            className="text-lg leading-relaxed text-text-secondary"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Hello! I'm <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Urmi</span>, a passionate web developer from Bangladesh.  
                            With a strong foundation in <span className="font-medium text-accent">React</span>, <span className="font-medium text-accent">Node.js</span>, and <span className="font-medium text-accent">Firebase</span>, 
                            I love building user-friendly, scalable web applications that bring ideas to life.
                        </motion.p>
                        
                        <motion.p
                            className="text-lg leading-relaxed text-text-secondary"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            I'm a dedicated, goal-oriented individual with a passion for learning and problem-solving. 
                            Currently, I'm expanding my expertise with <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Next.js</span> and <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">TypeScript</span> to build more robust applications.
                        </motion.p>
                        
                        <motion.p
                            className="text-lg leading-relaxed text-text-secondary"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Alongside coding, I enjoy <span className="font-medium text-accent">exploring new technologies</span>, <span className="font-medium text-accent">reading books</span>, and <span className="font-medium text-accent">discovering new places</span>.  
                            I thrive in collaborative environments and always strive to improve my skills.
                        </motion.p>
                    </div>
                    
                    <motion.div 
                        className="flex flex-col items-center justify-center space-y-6"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="relative w-56 h-56 md:w-64 md:h-64">
                            {/* Decorative rotating rings */}
                            <motion.div 
                                className="absolute inset-0 border-4 rounded-full border-accent/20"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                            
                            <motion.div 
                                className="absolute inset-0 m-4 border-4 rounded-full border-accent/10"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            />
                            
                            {/* Profile Image */}
                            <motion.img 
                                src="https://i.ibb.co/ZzCfQZrH/Aysha-removebg-preview.png" 
                                alt="Aysha Urmi"
                                className="object-cover w-full h-full p-2 rounded-full shadow-xl border-4 border-accent/20"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                        
                        {/* Hobbies Icons */}
                        <motion.div 
                            className="grid grid-cols-3 gap-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            {hobbies.map((hobby, index) => (
                                <motion.div 
                                    key={index}
                                    className="flex flex-col items-center justify-center p-3 space-y-2 rounded-lg bg-bg-secondary/30 backdrop-blur-sm text-text-secondary"
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--color-accent-rgb), 0.2)" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span className="text-accent text-xl">{hobby.icon}</span>
                                    <span className="text-xs font-medium">{hobby.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 mb-12"
                >
                    <h3 className="mb-8 text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text">
                        Things I Love
                    </h3>
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                        {hobbies.map((hobby, index) => (
                            <motion.div
                                key={index}
                                className="relative flex flex-col items-center p-6 transition-all duration-300 overflow-hidden group bg-gray-800/30 backdrop-blur-sm rounded-xl hover:bg-gray-800/40 border border-gray-700/30"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                                whileHover={{ 
                                    scale: 1.03, 
                                    transition: { duration: 0.2 },
                                }}
                            >
                                {/* Background glow effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl"></div>
                                </div>
                                
                                {/* Top decorative line */}
                                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-500 rounded-t-xl"></div>
                                
                                {/* Icon container with animations */}
                                <motion.div 
                                    className="relative flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 group-hover:border-blue-500/30 transition-all duration-300"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Orbit effect */}
                                    <motion.div 
                                        className="absolute inset-0 border border-blue-400/20 rounded-full"
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    
                                    {/* Glowing icon */}
                                    <motion.div 
                                        className="text-3xl text-blue-400 filter drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]"
                                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                        animate={{ 
                                            scale: [1, 1.1, 1],
                                            color: ["#60a5fa", "#93c5fd", "#60a5fa"]
                                        }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        {hobby.icon}
                                    </motion.div>
                                </motion.div>
                                
                                {/* Text with animated underline */}
                                <div className="relative">
                                    <motion.p 
                                        className="text-lg font-medium text-white"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {hobby.text}
                                    </motion.p>
                                    <motion.div 
                                        className="h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300 mt-1 mx-auto rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                                
                                {/* Subtle glowing dots in corners */}
                                <motion.div 
                                    className="absolute top-2 right-2 w-1 h-1 rounded-full bg-blue-400/70"
                                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                                />
                                <motion.div 
                                    className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-purple-400/70"
                                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 + index * 0.2 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.a
                    href="#contact"
                    className="relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-semibold text-white transition-all duration-300 rounded-full group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600"></span>
                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative z-10 flex items-center">
                        Let's Connect
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </motion.a>
            </motion.div>
        </div>
    );
};

export default AboutMe;