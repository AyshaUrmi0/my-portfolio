import { motion } from "framer-motion";

const DownloadResumeButton = () => {
  return (
    <a href="/Aysha_Akter_Urmi.pdf" download="Aysha_Akter_Urmi.pdf">
      <motion.button
        className="text-blue-400 border-blue-400 rounded-full  btn btn-outline hover:bg-blue-400 hover:text-white"
        whileHover={{ scale: 1.15, boxShadow: "0px 0px 15px #60a5fa" }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          type: "spring",
          stiffness: 250,
        }}
      >
        Download Resume
      </motion.button>
    </a>
  );
};

export default DownloadResumeButton;
