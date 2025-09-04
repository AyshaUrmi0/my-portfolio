import React, { useState, useRef } from "react";
import { Mail, Phone, MessageSquare, Send, Linkedin, Github, Twitter } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactInfo = () => {
  const canvasRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

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
    <div className="py-28  text-text-primary" id="contact">
       <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="relative inline-block mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Get In Touch</span>
            <span className="absolute bottom-1 left-0 w-full h-2 md:h-3 bg-accent/10 rounded-lg -z-10"></span>
          </h2>
          
          <div className="relative mx-auto w-28 h-1 mb-10">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
            <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full" 
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.span>
          </div>
          <p className="max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-text-secondary">
            My inbox is always open. Whether you have a question or just want to say hello, 
            I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-bg-secondary/50 backdrop-blur-md p-5 md:p-8 rounded-2xl border border-accent/10 shadow-xl"
          >
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  Contact Information
                </h3>
                <p className="text-sm md:text-base text-text-secondary mb-6 md:mb-8">
                  Feel free to reach out through any of these channels. I'm looking forward to connecting with you!
                </p>
              </div>

              <motion.div 
                className="space-y-4 md:space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl transition-all bg-bg-primary/50 hover:bg-accent/10 hover:translate-x-2 duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-2 md:p-3 rounded-full bg-accent/20 text-accent">
                    <Mail size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-text-secondary">Email</p>
                    <a href="mailto:ayshaismail021@gmail.com" className="text-sm md:text-base lg:text-lg font-medium hover:text-accent transition-colors">
                      ayshaismail021@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl transition-all bg-bg-primary/50 hover:bg-accent/10 hover:translate-x-2 duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-2 md:p-3 rounded-full bg-accent/20 text-accent">
                    <Phone size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-text-secondary">Phone</p>
                    <a href="tel:+your-phone-number" className="text-sm md:text-base lg:text-lg font-medium hover:text-accent transition-colors">
                      +your-phone-number
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl transition-all bg-bg-primary/50 hover:bg-accent/10 hover:translate-x-2 duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-2 md:p-3 rounded-full bg-accent/20 text-accent">
                    <MessageSquare size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-text-secondary">WhatsApp</p>
                    <a href="https://wa.me/your-whatsapp-number" className="text-sm md:text-base lg:text-lg font-medium hover:text-accent transition-colors">
                      +your-whatsapp-number
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <div className="mt-8 md:mt-12">
                <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-text-primary">Connect with me</h4>
                <div className="flex space-x-3 md:space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center p-2.5 md:p-3 text-white rounded-full shadow-lg ${social.color}`}
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
            className="bg-bg-secondary/50 backdrop-blur-md p-5 md:p-8 rounded-2xl border border-accent/10 shadow-xl"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Send a Message
            </h3>
            <p className="text-sm md:text-base text-text-secondary mb-6 md:mb-8">
              Have a project in mind or just want to say hi? Feel free to send me a message!
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-xs md:text-sm font-medium text-text-secondary mb-1.5 md:mb-2">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="from_name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={`w-full p-3 md:p-4 text-sm md:text-base bg-bg-primary/80 text-text-primary border border-accent/20 rounded-lg md:rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent shadow-inner transition-all duration-300`}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-xs md:text-sm font-medium text-text-secondary mb-1.5 md:mb-2">Your Email</label>
                <input
                  id="email"
                  type="email"
                  name="from_email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`w-full p-3 md:p-4 text-sm md:text-base bg-bg-primary/80 text-text-primary border border-accent/20 rounded-lg md:rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent shadow-inner transition-all duration-300`}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-text-secondary mb-1.5 md:mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hi, I'd like to talk about..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="4"
                  className={`w-full p-3 md:p-4 text-sm md:text-base bg-bg-primary/80 text-text-primary border border-accent/20 rounded-lg md:rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent shadow-inner transition-all duration-300`}
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
                  className={`px-4 py-2.5 md:px-6 md:py-3.5 text-sm md:text-base bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg md:rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center space-x-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send size={16} className={`md:w-[18px] md:h-[18px] ${isSubmitting ? 'animate-pulse' : 'animate-none'} ml-1.5 md:ml-2`} />
                </motion.button>
              </motion.div>
            </form>

            {isSent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 mb-4 text-sm text-green-400 bg-green-400/10 border border-green-400/30 rounded-lg"
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Your message has been sent successfully!</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
