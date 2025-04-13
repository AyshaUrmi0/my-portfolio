import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";

const DownloadResumeButton = () => {
  return (
    <a 
      href="/Aysha_Akter_Urmi_CV.pdf" 
      download="Aysha_Akter_Urmi_CV.pdf"
      className="inline-block"
    >
      <motion.button
        className="relative inline-flex items-center px-6 py-2.5 text-sm font-medium overflow-hidden rounded-full group bg-gray-800 text-white hover:text-white"
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Background animation effect */}
        <motion.span 
          className="absolute inset-0 w-full h-full transition-all duration-300 ease-out opacity-0 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 group-hover:opacity-100"
          initial={{ x: "100%", opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        
        {/* Sparkle effects */}
        <motion.span 
          className="absolute top-0 left-0 w-2 h-2 rounded-full bg-blue-400/70 blur-sm"
          animate={{ 
            x: ["0%", "150%"],
            y: ["0%", "150%"],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        />
        <motion.span 
          className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-purple-400/70 blur-sm"
          animate={{ 
            x: ["0%", "-150%"],
            y: ["0%", "-150%"],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            times: [0, 0.5, 1],
            delay: 0.5
          }}
        />
        
        {/* Button content */}
        <FaFileDownload className="relative z-10 mr-2 text-blue-400 group-hover:text-white transition-colors duration-300" />
        <span className="relative z-10 transition-all duration-300">Download Resume</span>
        
        {/* Border Animation */}
        <motion.span 
          className="absolute inset-0 border-2 border-blue-500 rounded-full"
          initial={{ opacity: 0.6 }}
          whileHover={{ 
            opacity: 0,
            scale: 1.1, 
            transition: { duration: 0.3 }
          }}
        />
      </motion.button>
    </a>
  );
};

export default DownloadResumeButton;
