import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "FindConnect",
    image: "/public/image/findconnect.png", // Replace with actual project image
    techStack: ["React", "Tailwind CSS", "Firebase", "Node.js", "MongoDB"],
    description:
      "FindConnect is a platform designed to help people find and recover lost items. ",
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
    image: "/public/image/TechSpring.png",
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
    image: "/public/image/WinterKindnessHub.png",
    techStack: ["React", "React Router", "JSON Server", "Framer Motion"],
    description:
      "A winter donation web application that connects donors with volunteers to provide winter clothing to those in need across Bangladesh. ",
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
  return (
    <div className="py-16 text-white bg-gray-950" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-10 text-3xl font-bold text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="overflow-hidden bg-gray-800 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{project.name}</h3>
                <p className="text-sm text-gray-400">{project.description}</p>
                <div className="mt-4 space-x-2">
                  <Link
                    to={`/projects/${index}`}
                    className="px-4 py-2 text-sm font-bold text-gray-900 transition bg-blue-500 border border-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:text-white hover:shadow-blue-500/50"
                  >
                    View More
                  </Link>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm text-blue-500 hover:text-blue-400"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm text-gray-400 hover:text-gray-300"
                  >
                    <Github size={18} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
