import { motion } from "framer-motion";
import { FaJs, FaPython, FaCuttlefish, FaReact, FaNodeJs, FaDatabase, FaServer, FaGitAlt, FaGithub, FaCodeBranch, FaFire, FaBootstrap, FaFigma, FaTools, FaNetworkWired } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMongodb, SiMysql, SiPostman, SiNetlify, SiPycharm, SiIntellijidea, SiMaterialdesign, SiNextdotjs, SiTypescript } from "react-icons/si";
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
            { name: "MongoDB", icon: <SiMongodb />, level: 90 }
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
                <span className="text-xs font-medium text-blue-300">{name}</span>
                <span className="text-xs font-medium text-blue-300">{level}%</span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full">
                <motion.div 
                    className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
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
        <div className="px-6 py-20 bg-gradient-to-b from-gray-900 to-gray-950" id="skills">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="relative inline-block mb-3 text-4xl font-bold">
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">My Skills</span>
                        <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-500/10 rounded-lg -z-10"></span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400">
                        Here's a showcase of my technical skills and proficiencies
                    </p>
                </motion.div>
                
                {/* Skills Category Tabs */}
                <div className="flex flex-wrap justify-center mb-10 gap-3">
                    {skills.map((skill, index) => (
                        <motion.button
                            key={index}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeTab === index 
                                ? `bg-gradient-to-r ${skill.color} text-white shadow-lg` 
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                            onClick={() => setActiveTab(index)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <span className={activeTab === index ? "text-white" : "text-blue-400"}>{skill.icon}</span>
                            {skill.category}
                        </motion.button>
                    ))}
                </div>
                
                {/* Active Category Description */}
                <motion.p 
                    className="max-w-2xl mx-auto mb-10 text-center text-gray-400"
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
                            className="p-5 overflow-hidden transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:shadow-xl hover:shadow-blue-900/10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                                y: -5,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.1)",
                                borderColor: "rgba(59, 130, 246, 0.3)"
                            }}
                            onHoverStart={() => setHoveredSkill(index)}
                            onHoverEnd={() => setHoveredSkill(null)}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${skills[activeTab].color} p-2.5 text-white`}>
                                    <motion.div
                                        animate={hoveredSkill === index ? { rotate: 360 } : {}}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="text-2xl"
                                    >
                                        {item.icon}
                                    </motion.div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
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
                    <div className="max-w-3xl p-6 text-center rounded-xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/20">
                        <h3 className="mb-3 text-2xl font-bold text-blue-300">Looking to collaborate on a project?</h3>
                        <p className="mb-5 text-gray-300">I'm always open to discussing new projects and opportunities.</p>
                        <a 
                            href="#contact" 
                            className="inline-flex items-center px-6 py-3 text-sm font-medium transition-all bg-blue-600 rounded-lg hover:bg-blue-700"
                        >
                            Get in touch
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
