import React, { useState, useRef } from "react";
import { Mail, Phone, MessageSquare, Send, Linkedin, Github, Twitter } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const ContactInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const { isDarkMode } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      to_email: "ayshaismail021@gmail.com", // Fixed recipient email
      from_name: name, // Sender's name (from input)
      from_email: email, // Sender's email (from input)
      message,
    };

    emailjs
      .send(
        "service_cm2iaqh", // Your EmailJS Service ID
        "template_6i9krt8", // Your EmailJS Template ID
        templateParams,
        "MwSfVk9yESTCcLLUg" // Your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setIsSent(true);
          setName("");
          setEmail("");
          setMessage("");
          setIsSubmitting(false);
          
          // Reset the success message after 5 seconds
          setTimeout(() => {
            setIsSent(false);
          }, 5000);
        },
        (error) => {
          console.error("Email failed to send", error);
          setIsSubmitting(false);
        }
      );
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/ayshaurmi/",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/AyshaUrmi0",
      color: "bg-gray-800 hover:bg-gray-900",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/aysha_urmi",
      color: "bg-sky-400 hover:bg-sky-500",
    }
  ];

  return (
    <div className={`py-28 ${isDarkMode 
      ? "bg-gradient-to-b from-bg-primary to-bg-secondary" 
      : "bg-gradient-to-b from-white to-bg-secondary/30"
    } text-text-primary`} id="contact">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="relative inline-block mb-4 text-5xl font-bold">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Get In Touch</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-accent/10 rounded-lg -z-10"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-text-secondary">
            My inbox is always open. Whether you have a question or just want to say hello, 
            I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`${isDarkMode 
              ? "bg-bg-secondary/50" 
              : "bg-white/90"
            } backdrop-blur-md p-8 rounded-2xl border ${isDarkMode 
              ? "border-accent/10" 
              : "border-gray-200"
            } shadow-xl`}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  Contact Information
                </h3>
                <p className="text-text-secondary mb-8">
                  Feel free to reach out through any of these channels. I'm looking forward to connecting with you!
                </p>
              </div>

              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className={`flex items-center space-x-4 p-4 rounded-xl transition-all ${isDarkMode 
                    ? "bg-bg-primary/50 hover:bg-accent/10" 
                    : "bg-gray-50 hover:bg-blue-50"
                  } hover:translate-x-2 duration-300`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`p-3 rounded-full ${isDarkMode 
                    ? "bg-accent/20 text-accent" 
                    : "bg-blue-100 text-blue-600"
                  }`}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Email</p>
                    <a href="mailto:ayshaismail021@gmail.com" className={`text-lg font-medium hover:text-accent transition-colors ${isDarkMode ? "" : "text-gray-800"}`}>
                      ayshaismail021@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className={`flex items-center space-x-4 p-4 rounded-xl transition-all ${isDarkMode 
                    ? "bg-bg-primary/50 hover:bg-accent/10" 
                    : "bg-gray-50 hover:bg-blue-50"
                  } hover:translate-x-2 duration-300`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`p-3 rounded-full ${isDarkMode 
                    ? "bg-accent/20 text-accent" 
                    : "bg-blue-100 text-blue-600"
                  }`}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Phone</p>
                    <a href="tel:+your-phone-number" className={`text-lg font-medium hover:text-accent transition-colors ${isDarkMode ? "" : "text-gray-800"}`}>
                      +your-phone-number
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className={`flex items-center space-x-4 p-4 rounded-xl transition-all ${isDarkMode 
                    ? "bg-bg-primary/50 hover:bg-accent/10" 
                    : "bg-gray-50 hover:bg-blue-50"
                  } hover:translate-x-2 duration-300`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`p-3 rounded-full ${isDarkMode 
                    ? "bg-accent/20 text-accent" 
                    : "bg-blue-100 text-blue-600"
                  }`}>
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">WhatsApp</p>
                    <a href="https://wa.me/your-whatsapp-number" className={`text-lg font-medium hover:text-accent transition-colors ${isDarkMode ? "" : "text-gray-800"}`}>
                      +your-whatsapp-number
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <div className="mt-12">
                <h4 className="text-lg font-semibold mb-4 text-text-primary">Connect with me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center p-3 text-white rounded-full shadow-lg ${social.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className={`${isDarkMode 
              ? "bg-bg-secondary/50" 
              : "bg-white/90"
            } backdrop-blur-md p-8 rounded-2xl border ${isDarkMode 
              ? "border-accent/10" 
              : "border-gray-200"
            } shadow-xl`}
          >
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Send a Message
            </h3>
            <p className="text-text-secondary mb-8">
              Have a project in mind or just want to say hi? Feel free to send me a message!
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="from_name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={`w-full p-4 ${isDarkMode 
                    ? "bg-bg-primary/80" 
                    : "bg-gray-50"
                  } text-text-primary border ${isDarkMode 
                    ? "border-accent/20" 
                    : "border-gray-200"
                  } rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent shadow-inner transition-all duration-300`}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Your Email</label>
                <input
                  id="email"
                  type="email"
                  name="from_email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`w-full p-4 ${isDarkMode 
                    ? "bg-bg-primary/80" 
                    : "bg-gray-50"
                  } text-text-primary border ${isDarkMode 
                    ? "border-accent/20" 
                    : "border-gray-200"
                  } rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent shadow-inner transition-all duration-300`}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hi, I'd like to talk about..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="5"
                  className={`w-full p-4 ${isDarkMode 
                    ? "bg-bg-primary/80" 
                    : "bg-gray-50"
                  } text-text-primary border ${isDarkMode 
                    ? "border-accent/20" 
                    : "border-gray-200"
                  } rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent shadow-inner transition-all duration-300`}
                ></textarea>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-end"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center space-x-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send size={18} className={`${isSubmitting ? 'animate-pulse' : 'animate-none'} ml-2`} />
                </motion.button>
              </motion.div>
            </form>

            {isSent && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`mt-6 p-4 rounded-xl ${isDarkMode 
                  ? "bg-green-500/20 border-green-500/30 text-green-400" 
                  : "bg-green-100 border-green-200 text-green-600"
                } border flex items-center justify-center space-x-2`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="font-medium">Message sent successfully!</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
