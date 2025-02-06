import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <div className="px-6 py-16 md:px-12">
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
                    className="mb-6 text-lg leading-relaxed text-white text-gray-600"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Hi, I’m <span className="font-bold text-blue-500">Urmi</span>! I’m a passionate and creative{" "}
                    <span className="text-blue-500">web developer</span> specializing in{" "}
                    <span className="font-medium">React</span>, <span className="font-medium">Firebase</span>, and{" "}
                    <span className="font-medium">Node.js</span>. With a strong focus on crafting clean, user-friendly
                    designs and scalable web applications, I strive to turn ideas into reality through code.
                </motion.p>
                <motion.p
                    className="mb-6 text-lg leading-relaxed text-white text-gray-600"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    When I’m not coding, I love playing football, exploring new places with friends, and relaxing at home
                    with my favorite books and movies. I’m constantly learning and excited to collaborate on meaningful
                    projects.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Link to={"/contact"} className="mt-4 btn btn-primary">
                        Let’s Connect
                    </Link>
                    <button className="px-6 py-3 mt-6 font-bold text-gray-900 transition bg-blue-500 border border-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:text-white hover:shadow-blue-500/50">
                        Apply
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutMe;