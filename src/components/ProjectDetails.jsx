import { useParams } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';


const projects = [
  {
    name: "FindConnect",
    image: "/image/findconnect.png", // Replace with actual project image
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

const ProjectDetails = () => {

  
  const { id } = useParams(); 
  const project = projects[id]; 

  if (!project) {
    return <h2 className="text-center text-red-500">Project not found!</h2>;
  }

  return (
    <div className="max-w-4xl p-20 mx-auto mt-10 text-white bg-gray-900 rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">{project.name}</h2>
      <img src={project.image} alt={project.name} className="object-cover w-full h-64 rounded-lg" />
      <p className="mt-4 text-gray-300">{project.description}</p>
      <h3 className="mt-4 text-lg font-bold text-blue-400">Tech Stack:</h3>
      <ul className="flex flex-wrap mt-2 space-x-2">
        {project.techStack.map((tech, index) => (
          <li key={index} className="px-3 py-1 text-sm bg-gray-700 rounded-md">
            {tech}
          </li>
        ))}
      </ul>
      <h3 className="mt-4 text-lg font-bold text-blue-400">Challenges:</h3>
      <ul className="mt-2 list-disc list-inside">
        {project.challenges.map((challenge, index) => (
          <li key={index} className="text-gray-300">{challenge}</li>
        ))}
      </ul>
      <h3 className="mt-4 text-lg font-bold text-blue-400">Future Plans:</h3>
      <ul className="mt-2 list-disc list-inside">
        {project.futurePlans.map((plan, index) => (
          <li key={index} className="text-gray-300">{plan}</li>
        ))}
      </ul>
      <div className="flex mt-6 space-x-4">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm font-bold text-gray-900 transition bg-blue-500 border border-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:text-white hover:shadow-blue-500/50"
        >
          Visit Live
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm font-bold text-gray-900 transition bg-gray-700 border border-gray-600 rounded-lg shadow-lg hover:bg-gray-800 hover:text-white hover:shadow-gray-500/50"
        >
          View Code
        </a>

      </div>
      
    </div>
  );
};

export default ProjectDetails;
