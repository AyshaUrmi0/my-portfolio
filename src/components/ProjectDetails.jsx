import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "Gadget Heaven",
    image: "/images/gadget-heaven.png",
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
  // Add other projects here...
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return <p className="text-center text-white">Project not found.</p>;
  }

  return (
    <div className="py-16 text-white bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <motion.img
          src={project.image}
          alt={project.name}
          className="object-cover w-full h-64 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <h2 className="mt-6 text-3xl font-bold">{project.name}</h2>
        <p className="mt-2 text-gray-400">{project.description}</p>

        <h3 className="mt-4 font-semibold">Tech Stack:</h3>
        <p className="text-gray-300">{project.techStack.join(", ")}</p>

        <h3 className="mt-4 font-semibold">Challenges Faced:</h3>
        <ul className="ml-5 text-gray-300 list-disc">
          {project.challenges.map((challenge, i) => (
            <li key={i}>{challenge}</li>
          ))}
        </ul>

        <h3 className="mt-4 font-semibold">Future Plans:</h3>
        <ul className="ml-5 text-gray-300 list-disc">
          {project.futurePlans.map((plan, i) => (
            <li key={i}>{plan}</li>
          ))}
        </ul>

        <div className="mt-6 space-x-4">
          <a href={project.liveLink} target="_blank" className="text-blue-400">
            <ExternalLink size={20} className="inline-block" /> Live Demo
          </a>
          <a href={project.github} target="_blank" className="text-gray-400">
            <Github size={20} className="inline-block" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
