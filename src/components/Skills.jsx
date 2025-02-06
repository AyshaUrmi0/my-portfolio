import { motion } from "framer-motion";
import { FaJs, FaPython, FaCuttlefish, FaReact, FaNodeJs, FaDatabase, FaServer, FaGitAlt, FaGithub, FaCodeBranch, FaFire, FaBootstrap, FaFigma, FaTools, FaNetworkWired } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMongodb, SiMysql, SiPostman, SiNetlify, SiPycharm, SiIntellijidea, SiMaterialdesign } from "react-icons/si";

const skills = [
    {
        category: "Programming Languages",
        icon: <FaCodeBranch />,
        items: [
            { name: "JavaScript", icon: <FaJs /> },
            { name: "Python", icon: <FaPython /> },
            { name: "C++", icon: <FaCuttlefish /> }
        ],
    },
    {
        category: "Libraries & Frameworks",
        icon: <FaServer />,
        items: [
            { name: "React", icon: <FaReact /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "DaisyUI", icon: <SiMaterialdesign /> },
            { name: "Material Tailwind", icon: <SiMaterialdesign /> },
            { name: "Framer Motion", icon: <FaNetworkWired /> },
            { name: "Bootstrap 5", icon: <FaBootstrap /> }
        ],
    },
    {
        category: "Database",
        icon: <FaDatabase />,
        items: [
            { name: "MySQL", icon: <SiMysql /> },
            { name: "MongoDB", icon: <SiMongodb /> }
        ],
    },
    {
        category: "Tools & Platforms",
        icon: <FaTools />,
        items: [
            { name: "GitHub", icon: <FaGithub /> },
            { name: "GIT", icon: <FaGitAlt /> },
            { name: "VSCode", icon: <FaCodeBranch /> },
            { name: "PyCharm", icon: <SiPycharm /> },
            { name: "IntelliJ", icon: <SiIntellijidea /> },
            { name: "Postman", icon: <SiPostman /> },
            { name: "Figma", icon: <FaFigma /> },
            { name: "Netlify", icon: <SiNetlify /> },
            { name: "Firebase", icon: <FaFire /> }
        ],
    },
];

const Skills = () => {
    return (
        <div className="px-6 py-16 md:px-12 bg-gray-950">
            <motion.div
                className="max-w-5xl mx-auto text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h2
                    className="mb-6 text-4xl font-bold text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    My Skills
                </motion.h2>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="p-6 transition transform bg-gray-800 rounded-lg shadow-md hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                        >
                            <div className="flex items-center gap-4 mb-3 text-white">
                                <span className="text-3xl text-blue-400">{skill.icon}</span>
                                <h3 className="text-xl font-semibold">{skill.category}</h3>
                            </div>
                            <ul className="flex flex-wrap gap-3">
                                {skill.items.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-lg shadow-md"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <span className="text-lg">{item.icon}</span> {item.name}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Skills;
