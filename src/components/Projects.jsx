import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "FindConnect",
    image: "https://i.ibb.co/6c4hSGKK/findconnect.png",
    techStack: ["React", "Tailwind CSS", "Firebase", "Node.js", "MongoDB"],
    description:
      "FindConnect is a platform designed to help people find and recover lost items.",
    liveLink: "https://findconnect-45273.web.app/",
    github: "https://github.com/AyshaUrmi0/FindConnect",
    challenges: [
      "Managing state efficiently across multiple components.",
      "Optimizing performance for large datasets.",
    ],
    futurePlans: [
      "Enhance the UI with animations and dark mode.",
    ],
  },
  {
    name: "TechSpring",
    image: "https://i.ibb.co.com/VcXy569W/techspring.png",
    techStack: ["React", "Tailwind CSS", "DaisyUI", "Express.js", "MongoDB"],
    description:
      "TechSpring-Client is a web application designed to facilitate the funding of tech startups, creative ideas, and personal causes.",
    liveLink: "https://techspring-ec865.web.app/",
    github: "https://github.com/AyshaUrmi0/Tech-startup?tab=readme-ov-file",
    challenges: [
      "Ensuring secure transactions and user authentication.",
      "Creating a dynamic real-time donation tracker.",
    ],
    futurePlans: [
      "Introduce payment gateway integration.",
      "Implement user dashboards for tracking donations.",
    ],
  },
  {
    name: "Winter Kindness Hub",
    image: "https://i.ibb.co.com/LXNVLvsJ/winter.png",
    techStack: ["React", "React Router", "JSON Server", "Framer Motion"],
    description:
      "A winter donation web application that connects donors with volunteers to provide winter clothing to those in need across Bangladesh.",
    liveLink: "https://winter-kindness-hub.web.app/",
    github: "https://github.com/AyshaUrmi0/Winter-Kindness-Hub",
    challenges: [
      "Ensuring smooth UI/UX transitions with animations.",
    ],
    futurePlans: [
      "Introduce AI-based team recommendations.",
      "Add player statistics and analytics dashboard.",
    ],
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="py-28 bg-transparent text-text-primary" id="projects">
      <div className="max-w-7xl px-6 mx-auto">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="relative inline-block mb-3 text-5xl font-bold">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-accent/10 rounded-lg -z-10"></span>
            </h2>
          </motion.div>
          <p className="max-w-2xl mx-auto text-xl text-text-secondary">
            Here are some of my recent projects showcasing my skills and experience
          </p>
        </motion.div>

        {/* New Introduction Section */}
        <motion.div 
          className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-accent/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              My Development Philosophy
            </h3>
            <p className="text-text-secondary text-lg mb-4">
              I specialize in building <span className="text-accent font-medium">modern web applications</span> with a focus on <span className="text-accent font-medium">clean code</span>, <span className="text-accent font-medium">performance</span>, and <span className="text-accent font-medium">user experience</span>. My projects range from interactive front-end applications to full-stack solutions.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <span className="px-4 py-2 bg-bg-secondary/70 rounded-full text-accent font-medium">React & Next.js</span>
              <span className="px-4 py-2 bg-bg-secondary/70 rounded-full text-accent font-medium">Responsive Design</span>
              <span className="px-4 py-2 bg-bg-secondary/70 rounded-full text-accent font-medium">UX/UI Focus</span>
              <span className="px-4 py-2 bg-bg-secondary/70 rounded-full text-accent font-medium">Full Stack Solutions</span>
            </div>
          </div>
        </motion.div>

        {/* Larger and Enhanced Project Cards */}
        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden bg-bg-secondary/50 backdrop-blur-sm rounded-xl shadow-xl border border-accent/10 h-full transform transition-all duration-500 group-hover:shadow-lg group-hover:shadow-accent/20 group-hover:border-accent/30">
                {/* Colored gradient overlay on hover */}
                <div className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:opacity-100"></div>
                
                {/* Card content */}
                <div className="relative z-10">
                  {/* Project image with overlay */}
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 z-10 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-bg-secondary to-transparent group-hover:opacity-100"></div>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="object-cover w-full transform transition-transform duration-700 h-72 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/800x500/3b82f6/ffffff?text=" + project.name;
                      }}
                    />
                    
                    {/* Tech stack pills that appear on hover */}
                    <motion.div 
                      className="absolute bottom-0 left-0 z-20 flex flex-wrap w-full gap-2 p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.techStack.slice(0, 3).map((tech, techIndex) => (
                        <motion.span 
                          key={techIndex} 
                          className="px-3 py-1.5 text-sm font-medium text-text-primary rounded-full bg-accent/90 backdrop-blur-sm"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.techStack.length > 3 && (
                        <motion.span 
                          className="px-3 py-1.5 text-sm font-medium text-text-primary rounded-full bg-purple-500/90 backdrop-blur-sm"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          +{project.techStack.length - 3} more
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                  
                  {/* Project details */}
                  <div className="p-8">
                    <motion.h3 
                      className="mb-3 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400"
                      whileHover={{ letterSpacing: "0.5px" }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.name}
                    </motion.h3>
                    <p className="mb-6 text-lg text-text-secondary">
                      {project.description}
                    </p>
                    
                    {/* Action buttons */}
                    <div className="flex items-center justify-between mt-6">
                      <Link
                        to={`/projects/${index}`}
                        className="inline-flex items-center px-6 py-3 text-base font-medium transition-all duration-300 rounded-lg group-hover:bg-accent bg-accent/80 text-text-primary hover:shadow-lg hover:shadow-accent/30"
                      >
                        View Details
                        <motion.span 
                          animate={hoveredIndex === index ? { x: [0, 5, 0] } : { x: 0 }}
                          transition={{ repeat: hoveredIndex === index ? Infinity : 0, duration: 1 }}
                          className="ml-2"
                        >
                          <FaExternalLinkAlt size={18} />
                        </motion.span>
                      </Link>
                      
                      <div className="flex space-x-3">
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 text-accent transition-all rounded-full hover:bg-accent/20 hover:text-accent"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt size={20} />
                        </motion.a>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 text-text-secondary transition-all rounded-full hover:bg-bg-secondary hover:text-text-primary"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub size={20} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced View All Projects button */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="https://github.com/AyshaUrmi0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative inline-flex items-center px-8 py-4 overflow-hidden text-lg font-medium text-text-primary transition-all duration-300 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-md"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative group-hover:translate-x-2 transition-transform duration-300 flex items-center">
              View All Projects <FaGithub className="ml-3" size={20} />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
