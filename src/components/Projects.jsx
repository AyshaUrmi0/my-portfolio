import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const projects = [
  {
    name: "FindConnect",
    image: "/image/findconnect.png",
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
    image: "/image/TechSpring.png",
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
    image: "/image/WinterKindnessHub.png",
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
  const { isDarkMode } = useTheme();

  return (
    <div className="py-20 bg-bg-primary text-text-primary" id="projects">
      <div className="max-w-6xl px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="relative inline-block mb-3 text-4xl font-bold">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-accent/10 rounded-lg -z-10"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-text-secondary">
            Here are some of my recent projects showcasing my skills and experience
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
            >
              <div className="relative overflow-hidden bg-bg-secondary/50 backdrop-blur-sm rounded-xl shadow-xl border border-accent/10 h-full transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-accent/10">
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
                      className="object-cover w-full transform transition-transform duration-700 h-52 group-hover:scale-110"
                    />
                    
                    {/* Tech stack pills that appear on hover */}
                    <motion.div 
                      className="absolute bottom-0 left-0 z-20 flex flex-wrap w-full gap-2 p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.techStack.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-2 py-1 text-xs font-medium text-text-primary rounded-full bg-accent/80 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium text-text-primary rounded-full bg-purple-500/80 backdrop-blur-sm">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </motion.div>
                  </div>
                  
                  {/* Project details */}
                  <div className="p-6">
                    <h3 className="mb-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                      {project.name}
                    </h3>
                    <p className="mb-6 text-text-secondary line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Action buttons */}
                    <div className="flex items-center justify-between mt-auto">
                      <Link
                        to={`/projects/${index}`}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group-hover:bg-accent bg-accent/80 text-text-primary hover:shadow-lg hover:shadow-accent/30"
                      >
                        View Details
                        <motion.span 
                          animate={hoveredIndex === index ? { x: [0, 5, 0] } : { x: 0 }}
                          transition={{ repeat: hoveredIndex === index ? Infinity : 0, duration: 1 }}
                          className="ml-1"
                        >
                          <ArrowRight size={16} />
                        </motion.span>
                      </Link>
                      
                      <div className="flex space-x-2">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-8 h-8 text-accent transition-all rounded-full hover:bg-accent/20 hover:text-accent"
                        >
                          <ExternalLink size={18} />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-8 h-8 text-text-secondary transition-all rounded-full hover:bg-bg-secondary hover:text-text-primary"
                        >
                          <Github size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All Projects button */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a 
            href="https://github.com/AyshaUrmi0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative inline-flex items-center px-6 py-3 overflow-hidden text-lg font-medium text-text-primary transition-all duration-300 rounded-lg group bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          >
            <span className="relative group-hover:translate-x-1 transition-transform duration-300 flex items-center">
              View All Projects <Github className="ml-2" size={18} />
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
