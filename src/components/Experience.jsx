import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Speaker",
      organization: "Bangladesh Betar Chittagong",
      location: "Chattogram, Bangladesh",
      duration: "Jan 2014 - Feb 2016",
      details: [
        "Participated in 'Shikkartider Ashor' Live Program on Bangladesh Betar Chittagong.",
        "Collaborated with school teachers to host live programs focusing on English learning and grammar.",
        "Engaged in discussions and presentations to enhance English language skills among listeners.",
        "Gained valuable experience in broadcasting and public speaking.",
      ],
    },
    {
      role: "Social Media Manager",
      organization: "Unique Schooling",
      location: "Remote",
      duration: "Oct 2023 - Present",
      details: [
        "Successfully managed social media platforms for Unique School, resulting in an increase in followers and engagement.",
        "Collaborated closely with the team to enhance service offerings for students, resulting in improved user satisfaction.",
      ],
    },
  ];

  return (
    <div className="py-16 bg-base-200" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-center">Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-6 shadow-lg card bg-base-100">
            <div className="card-body">
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <p className="font-semibold text-md">{exp.organization}</p>
              <p className="text-sm text-gray-600">{exp.location}</p>
              <p className="mb-4 text-sm">{exp.duration}</p>
              <ul className="text-sm list-disc list-inside">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
