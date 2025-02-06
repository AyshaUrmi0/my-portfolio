import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "Gadget Heaven",
    image: "/images/gadget-heaven.png", // Replace with actual project image
    techStack: ["React", "Tailwind CSS", "Firebase", "Node.js", "MongoDB"],
    description:
      "An e-commerce platform for buying and managing gadgets, featuring cart and wishlist functionalities.",
    liveLink: "https://playful-meerkat-99f2e1.netlify.app/",
    github: "https://github.com/your-username/gadget-heaven",
    challenges: [
      "Managing state efficiently across multiple components.",
      "Optimizing performance for large datasets.",
    ],
    futurePlans: [
      "Implement a user authentication system.",
      "Enhance the UI with animations and dark mode.",
    ],
  },
  {
    name: "Donation Platform",
    image: "/images/donation-platform.png",
    techStack: ["React", "Tailwind CSS", "DaisyUI", "Express.js", "MongoDB"],
    description:
      "A platform to facilitate donations with multiple categories and real-time tracking.",
    liveLink: "https://your-donation-platform.netlify.app/",
    github: "https://github.com/your-username/donation-platform",
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
    name: "Cricket Team Selection App",
    image: "/images/cricket-team.png",
    techStack: ["React", "React Router", "JSON Server", "Framer Motion"],
    description:
      "An application that allows users to select and manage a cricket team with a budget constraint.",
    liveLink: "https://jolly-snickerdoodle-4f276a.netlify.app/",
    github: "https://github.com/your-username/cricket-team-app",
    challenges: [
      "Handling budget constraints dynamically while selecting players.",
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
