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
      "Participated in the Chattogram ICT Fair 2025, showcasing Startup Chattogram's initiatives and engaging with attendees to promote the startup ecosystem.",
      "Collaborated with the team to organize events, workshops, and mentorship programs for aspiring startups.",
      "Managed communication and outreach efforts to engage the local startup ecosystem.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="py-16 bg-transparent text-text-primary" id="experience">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="mb-8 text-4xl font-bold text-accent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="p-6 mb-6 transition-all duration-300 bg-bg-secondary/80 backdrop-blur-sm border border-accent shadow-lg rounded-xl hover:shadow-accent/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="text-accent" size={24} />
              <h3 className="text-xl font-bold text-accent">{exp.role}</h3>
            </div>
            <p className="font-semibold text-md">{exp.organization}</p>
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <MapPin size={18} className="text-accent" />
              <span>{exp.location}</span>
            </div>
            <p className="mb-4 text-sm text-text-secondary">{exp.duration}</p>
            <ul className="text-sm text-text-secondary list-disc list-inside">
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
