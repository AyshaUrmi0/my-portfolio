import React, { useState } from "react";
import { Mail, Phone, MessageSquare } from "lucide-react"; // Use Lucide React icons

const ContactInfo = () => {
  // State to store form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto link with user input
    const mailtoLink = `mailto:your-email@example.com?subject=Contact Form Submission from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    
    // Redirect to the mailto link
    window.location.href = mailtoLink;
  };

  return (
    <div className="py-16 text-white bg-gray-950" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-center">Contact Information</h2>
        <p className="mb-6 text-lg text-center text-gray-300">
          My inbox is always open. Whether you have a question or just want to say hello, 
          I'll try my best to get back to you! Feel free to mail me about any relevant job updates.
        </p>

        {/* Contact Details */}
        <div className="mb-8 space-y-6">
          {/* Email Section */}
          <div className="flex items-center space-x-4">
            <Mail size={24} className="text-blue-400" />
            <a
              href="mailto:your-email@example.com"
              className="text-lg text-gray-300 hover:text-white"
            >
              your-email@example.com
            </a>
          </div>

          {/* Phone Section */}
          <div className="flex items-center space-x-4">
            <Phone size={24} className="text-green-400" />
            <a
              href="tel:+your-phone-number"
              className="text-lg text-gray-300 hover:text-white"
            >
              +your-phone-number
            </a>
          </div>

          {/* WhatsApp Section */}
          <div className="flex items-center space-x-4">
            <MessageSquare size={24} className="text-green-500" />
            <a
              href="https://wa.me/your-whatsapp-number"
              className="text-lg text-gray-300 hover:text-white"
            >
              WhatsApp: +your-whatsapp-number
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-center">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 text-white bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 text-white bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400"
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
                className="w-full p-3 text-white bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
