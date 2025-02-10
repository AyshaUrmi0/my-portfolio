import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';


const Footer = () => {
  return (
    <footer className="py-8 text-center text-white bg-gray-800">
      <div className="container mx-auto">
        <p className="mb-4 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Aysha Akter Urmi. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          {/* Social Icons */}
          <motion.a
            href="https://github.com/AyshaUrmi0"
            className="text-gray-400 transition duration-300 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ayshaurmi/"
            className="text-gray-400 transition duration-300 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://x.com/aysha_urmi"
            className="text-gray-400 transition duration-300 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaX size={24} />
          </motion.a>
          <motion.a
            href="https://medium.com/@ayshaismail021"
            className="text-gray-400 transition duration-300 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaMedium size={24} />
          </motion.a>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Designed & Developed by <span className="font-semibold text-blue-400">Aysha Akter Urmi</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
