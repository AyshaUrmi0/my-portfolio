import { motion } from "framer-motion";
import { FaJs, FaPython, FaCuttlefish, FaReact, FaNodeJs, FaDatabase, FaServer, FaGitAlt, FaGithub, FaCodeBranch, FaFire, FaBootstrap, FaFigma, FaTools, FaNetworkWired } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMongodb, SiMysql, SiPostman, SiNetlify, SiPycharm, SiIntellijidea, SiMaterialdesign, SiNextdotjs, SiTypescript, SiPostgresql, SiRedux, SiSwagger } from "react-icons/si";
import { useState } from "react";

const skills = [
    {
        category: "Programming Languages",
        icon: <FaCodeBranch />,
        color: "from-blue-500 to-cyan-400",
        description: "Core languages I use for development",
        items: [
            { name: "JavaScript", icon: <FaJs />, level: 90 },
            { name: "TypeScript", icon: <SiTypescript />, level: 82 },
            { name: "Python", icon: <FaPython />, level: 80 },
            { name: "C++", icon: <FaCuttlefish />, level: 75 }
        ],
    },
    {
        category: "Libraries & Frameworks",
        icon: <FaServer />,
        color: "from-purple-500 to-pink-500",
        description: "Tools that accelerate my development workflow",
        items: [
            { name: "React", icon: <FaReact />, level: 92 },
            { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
            { name: "Node.js", icon: <FaNodeJs />, level: 85 },
            { name: "Express.js", icon: <SiExpress />, level: 80 },
            { name: "Redux Toolkit", icon: <SiRedux />, level: 88 },
            { name: "RTK Query", icon: <SiRedux />, level: 85 },
            { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 },
            { name: "DaisyUI", icon: <SiMaterialdesign />, level: 85 },
            { name: "Material Tailwind", icon: <SiMaterialdesign />, level: 80 },
            { name: "Framer Motion", icon: <FaNetworkWired />, level: 75 },
            { name: "Bootstrap 5", icon: <FaBootstrap />, level: 85 }
        ],
    },
    {
        category: "Database",
        icon: <FaDatabase />,
        color: "from-green-500 to-emerald-400",
        description: "Solutions I use for data storage and management",
        items: [
            { name: "MySQL", icon: <SiMysql />, level: 85 },
            { name: "MongoDB", icon: <SiMongodb />, level: 90 },
            { name: "PostgreSQL", icon: <SiPostgresql />, level: 82 }
        ],
    },
    {
        category: "Tools & Platforms",
        icon: <FaTools />,
        color: "from-yellow-400 to-orange-500",
        description: "Essential tools that support my development process",
        items: [
            { name: "GitHub", icon: <FaGithub />, level: 90 },
            { name: "GIT", icon: <FaGitAlt />, level: 88 },
            { name: "VSCode", icon: <FaCodeBranch />, level: 95 },
            { name: "PyCharm", icon: <SiPycharm />, level: 80 },
            { name: "IntelliJ", icon: <SiIntellijidea />, level: 75 },
            { name: "Postman", icon: <SiPostman />, level: 85 },
            { name: "Swagger API", icon: <SiSwagger />, level: 80 },
            { name: "Figma", icon: <FaFigma />, level: 80 },
            { name: "Netlify", icon: <SiNetlify />, level: 85 },
            { name: "Firebase", icon: <FaFire />, level: 88 }
        ],
    },
];

const SkillBar = ({ level, name }) => {
    return (
        <div className="w-full mb-1">
            <div className="flex justify-between mb-1">
                <span className="text-xs font-medium text-accent">{name}</span>
                <span className="text-xs font-medium text-accent">{level}%</span>
            </div>
            <div className="w-full h-2 rounded-full shadow-inner">
                <motion.div 
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                />
            </div>
        </div>
    );
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <div className="px-6 py-20 bg-transparent" id="skills">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="relative inline-block mb-3 text-5xl font-bold">
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">My Skills</span>
                        <span className="absolute bottom-1 left-0 w-full h-3 bg-accent/10 rounded-lg -z-10"></span>
                    </h2>
                    
                    <div className="relative mx-auto w-28 h-1 mb-10">
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
                        <motion.span 
                            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full" 
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        ></motion.span>
                    </div>
                    <p className="max-w-2xl mx-auto text-xl text-text-secondary">
                        Here's a showcase of my technical skills and proficiencies
                    </p>
                </motion.div>
                
                {/* Skills Category Tabs */}
                <div className="flex flex-wrap justify-center mb-10 gap-3">
                    {skills.map((skill, index) => (
                        <motion.button
                            key={index}
                            className={`flex items-center gap-2 px-5 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                                activeTab === index 
                                ? `bg-gradient-to-r ${skill.color} text-text-primary shadow-lg` 
                                : 'bg-bg-secondary text-text-secondary hover:bg-bg-secondary/70'
                            }`}
                            onClick={() => setActiveTab(index)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <span className={activeTab === index ? "text-text-primary text-xl" : "text-accent text-xl"}>{skill.icon}</span>
                            {skill.category}
                        </motion.button>
                    ))}
                </div>
                
                {/* Active Category Description */}
                <motion.p 
                    className="max-w-2xl mx-auto mb-10 text-center text-lg text-text-secondary"
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {skills[activeTab].description}
                </motion.p>
                
                {/* Skill Grid */}
                <motion.div 
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                    key={`grid-${activeTab}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {skills[activeTab].items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="p-5 overflow-hidden transition-all duration-300 bg-bg-secondary/50 backdrop-blur-sm border border-accent/10 rounded-xl hover:shadow-xl hover:shadow-accent/10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                                y: -5,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                borderColor: "rgba(var(--color-accent-rgb), 0.3)"
                            }}
                            onHoverStart={() => setHoveredSkill(index)}
                            onHoverEnd={() => setHoveredSkill(null)}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${skills[activeTab].color} p-2.5 text-text-primary`}>
                                    <motion.div
                                        animate={hoveredSkill === index ? { rotate: 360 } : {}}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="text-2xl"
                                    >
                                        {item.icon}
                                    </motion.div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-text-primary">{item.name}</h3>
                                </div>
                            </div>
                            <SkillBar level={item.level} name="Proficiency" />
                        </motion.div>
                    ))}
                </motion.div>
                
                {/* Call to Action */}
                <motion.div 
                    className="flex justify-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-3xl p-6 text-center rounded-xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-accent/20">
                        <h3 className="mb-3 text-2xl font-bold text-accent">Looking to collaborate on a project?</h3>
                        <p className="mb-5 text-text-secondary">I'm always open to discussing new projects and opportunities.</p>
                        <a 
                            href="#contact" 
                            className="inline-flex items-center px-6 py-3 text-sm font-medium transition-all bg-accent rounded-lg hover:bg-accent/80 text-text-primary"
                        >
                            Get in touch
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
