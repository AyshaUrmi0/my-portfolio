import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Intern",
    organization: "Startup Chattogram",
    location: "Chattogram, Bangladesh",
    duration: "Dec 2024 - Present",
    details: [
      "Represented Startup Chattogram at the BRAC Youth Career Expo 2025, conducting on-spot interviews for nearly 200 job seekers and providing information about job openings and the company.",
      "Participated in the Chattogram ICT Fair 2025, showcasing Startup Chattogram’s initiatives and engaging with attendees to promote the startup ecosystem.",
      "Collaborated with the team to organize events, workshops, and mentorship programs for aspiring startups.",
      "Managed communication and outreach efforts to engage the local startup ecosystem.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="py-16 text-white bg-gray-950" id="experience">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="mb-8 text-4xl font-bold text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="p-6 mb-6 transition-all duration-300 bg-gray-800 border border-blue-400 shadow-lg rounded-xl hover:shadow-blue-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="text-blue-400" size={24} />
              <h3 className="text-xl font-bold text-blue-300">{exp.role}</h3>
            </div>
            <p className="font-semibold text-md">{exp.organization}</p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin size={18} className="text-blue-400" />
              <span>{exp.location}</span>
            </div>
            <p className="mb-4 text-sm text-gray-400">{exp.duration}</p>
            <ul className="text-sm text-gray-300 list-disc list-inside">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
