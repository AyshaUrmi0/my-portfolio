import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBook, FaCode, FaPaintBrush, FaPuzzlePiece, FaUsers } from "react-icons/fa";

const AboutMe = () => {

    const hobbies = [
        { icon: <FaCode />, text: "Coding" },
        { icon: <FaBook />, text: "Reading" },
        { icon: <FaPaintBrush />, text: "Painting & Crafting" },
        { icon: <FaPuzzlePiece />, text: "Problem Solving" },
        { icon: <FaUsers />, text: "Team Management & Mentoring" },
    ];
    return (
        <div className="px-6 py-16 md:px-12 bg-gray-950" id="about" >
            <motion.div
                className="max-w-4xl mx-auto text-center"
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
                    About Me
                </motion.h2>
                <motion.p
                    className="mb-6 text-lg leading-relaxed text-gray-400"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Hello! I'm <span className="font-bold text-blue-500">Urmi</span>, a passionate web developer from Bangladesh.  
                    With a strong foundation in <span className="font-medium">React</span>, <span className="font-medium">Node.js</span>, and <span className="font-medium">Firebase</span>, 
                    I love building user-friendly, scalable web applications that bring ideas to life.
                </motion.p>
                <motion.p
                    className="mb-6 text-lg leading-relaxed text-gray-400"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    I’m a dedicated, goal-oriented individual with a passion for learning and problem-solving. 
                    Alongside coding, I enjoy <span className="font-medium">football</span>, <span className="font-medium">reading books</span>, and <span className="font-medium">exploring new places</span>.  
                    I thrive in collaborative environments and always strive to improve my skills.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                   <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-8 mb-8"
                >
                    <h3 className="mb-4 text-xl font-semibold text-white">Things I Love:</h3>
                    <div className="grid justify-center grid-cols-2 gap-6 sm:grid-cols-3">
                        {hobbies.map((hobby, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center p-4 text-white transition transform bg-gray-800 rounded-lg shadow-md hover:scale-105"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                            >
                                <div className="text-3xl text-blue-400">{hobby.icon}</div>
                                <p className="mt-2 text-lg">{hobby.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                    <Link
                        to={"/contact"}
                        className="px-6 py-3 mt-4 font-bold text-gray-900 transition bg-blue-500 border border-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:text-white hover:shadow-blue-500/50"
                    >
                        Let’s Connect
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutMe;
