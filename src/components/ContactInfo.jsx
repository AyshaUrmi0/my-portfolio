import React, { useState } from "react";
import { Mail, Phone, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../context/ThemeContext";

const ContactInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const { isDarkMode } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();

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
        },
        (error) => {
          console.error("Email failed to send", error);
        }
      );
  };

  return (
    <div className="py-16 bg-bg-primary text-text-primary" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="mb-6 text-3xl font-bold text-center">Contact Information</h2>
        <p className="mb-6 text-lg text-center text-text-secondary">
          My inbox is always open. Whether you have a question or just want to say hello, 
          I'll try my best to get back to you! Feel free to mail me about any relevant job updates.
        </p>

        <div className="mb-8 space-y-6">
          <div className="flex items-center space-x-4">
            <Mail size={24} className="text-accent" />
            <a href="mailto:ayshaismail021@gmail.com" className="text-lg text-text-secondary hover:text-text-primary transition-colors">
              ayshaismail021@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Phone size={24} className="text-accent" />
            <a href="tel:+your-phone-number" className="text-lg text-text-secondary hover:text-text-primary transition-colors">
              +your-phone-number
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <MessageSquare size={24} className="text-accent" />
            <a href="https://wa.me/your-whatsapp-number" className="text-lg text-text-secondary hover:text-text-primary transition-colors">
              WhatsApp: +your-whatsapp-number
            </a>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-center mb-4">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 bg-bg-secondary text-text-primary border border-accent/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 bg-bg-secondary text-text-primary border border-accent/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="4"
                className="w-full p-3 bg-bg-secondary text-text-primary border border-accent/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-text-primary transition-colors rounded-lg hover:bg-accent/80"
              >
                Send Message
              </button>
            </div>
          </form>

          {isSent && (
            <p className="mt-4 text-lg font-semibold text-center text-green-400">
              ✅ Message sent successfully!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
