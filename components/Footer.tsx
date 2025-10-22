"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-darker py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-2">
              <span className="text-white">Abdulrahman</span>{" "}
              <span className="text-gradient">Agbaje</span>
            </h3>
            <p className="text-gray-400">Full-Stack Software Engineer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://www.linkedin.com/in/abdulrahman-agbaje-9723b9217/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all duration-300 glow-hover"
            >
              <FaLinkedin className="text-xl text-primary" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="mailto:aagbaje343@gmail.com"
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all duration-300 glow-hover"
            >
              <FaEnvelope className="text-xl text-primary" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-gray-400 text-sm"
          >
            <p className="flex items-center justify-center gap-2">
              Made with <FaHeart className="text-primary animate-pulse" /> by
              Abdulrahman Agbaje
            </p>
            <p className="mt-2">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
