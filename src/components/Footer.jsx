import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaHeart, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { HashLink as Link } from 'react-router-hash-link';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDarkMode } = useTheme();
  
  const footerLinks = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" }
  ];

  const socialLinks = [
    { icon: <FaGithub size={20} />, href: "https://github.com/AyshaUrmi0", label: "GitHub" },
    { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/ayshaurmi/", label: "LinkedIn" },
    { icon: <FaX size={20} />, href: "https://x.com/aysha_urmi", label: "Twitter" },
    { icon: <FaMedium size={20} />, href: "https://medium.com/@ayshaismail021", label: "Medium" }
  ];

  return (
    <footer className="relative pt-16 pb-10 overflow-hidden bg-bg-secondary text-text-primary">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bg-blue-500 rounded-full w-96 h-96 -top-20 -left-20 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bg-purple-500 rounded-full w-96 h-96 -bottom-20 -right-20 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container relative z-10 px-6 mx-auto">
        {/* Footer top section */}
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand section */}
          <div className="space-y-4">
            <Link to="/" className="inline-block text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              AyshaUrmi
            </Link>
            <p className="text-sm text-text-secondary max-w-[250px]">
              A passionate full-stack developer focused on creating intuitive and efficient web solutions.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full bg-bg-primary hover:bg-accent hover:bg-opacity-70 text-text-secondary hover:text-text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={link.link}
                    className="inline-block text-text-secondary transition-all duration-300 hover:text-accent hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <ul className="space-y-3">
              <motion.li 
                className="flex items-center gap-2 text-text-secondary"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <FaEnvelope className="text-accent" />
                <a href="mailto:ayshaismail021@gmail.com" className="hover:text-accent transition-colors">
                  ayshaismail021@gmail.com
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center gap-2 text-text-secondary"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <FaPhone className="text-accent" />
                <span>+880 1234567890</span>
              </motion.li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Stay Updated</h3>
            <p className="mb-3 text-sm text-text-secondary">
              Subscribe to receive updates about my latest projects
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-3 py-2 text-sm bg-bg-primary border-none rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
              />
              <motion.button 
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-text-primary transition-all bg-accent rounded-lg hover:bg-accent/80"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px mx-auto mb-8 bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
        
        {/* Footer bottom */}
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <motion.p 
            className="text-sm text-text-secondary"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            &copy; {currentYear} Aysha Akter Urmi. All rights reserved.
          </motion.p>
          
          <motion.p 
            className="text-sm text-text-secondary"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Made with 
            <motion.span 
              className="inline-block mx-1 text-red-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaHeart size={14} />
            </motion.span> 
            by <span className="font-semibold text-accent">Aysha Akter Urmi</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
