"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-darker" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let&apos;s discuss your next project or opportunity
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Feel free to reach out through any of the channels below. I&apos;m always
                open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 p-4 glass rounded-xl cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="text-2xl text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a
                  href="mailto:aagbaje343@gmail.com"
                  className="text-white font-semibold hover:text-primary transition-colors"
                >
                  aagbaje343@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 p-4 glass rounded-xl cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaLinkedin className="text-2xl text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/abdulrahman-agbaje-9723b9217/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-primary transition-colors"
                >
                  Connect with me
                </a>
              </div>
            </motion.div>

            <div className="pt-6">
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="https://www.linkedin.com/in/abdulrahman-agbaje-9723b9217/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all duration-300 glow-hover"
                >
                  <FaLinkedin className="text-2xl text-primary" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  href="mailto:aagbaje343@gmail.com"
                  className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all duration-300 glow-hover"
                >
                  <FaEnvelope className="text-2xl text-primary" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 glass rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaPaperPlane className="text-lg" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
