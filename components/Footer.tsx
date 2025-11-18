"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaHeart, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-12 md:py-16 border-t border-blue-500/20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-white">Abdulrahman</span>{" "}
              <span className="text-gradient">Agbaje</span>
            </h3>
            <p className="text-gray-400 text-sm md:text-base">Software Engineer & Full-Stack Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-4 md:gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.15, y: -4 }}
              href="https://github.com/deboy01"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 md:w-12 md:h-12 rounded-full glass flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300 glow-hover border border-blue-500/20"
            >
              <FaGithub className="text-lg md:text-xl text-blue-400" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, y: -4 }}
              href="https://www.linkedin.com/in/abdulrahman-agbaje-9723b9217/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 md:w-12 md:h-12 rounded-full glass flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300 glow-hover border border-blue-500/20"
            >
              <FaLinkedin className="text-lg md:text-xl text-blue-400" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, y: -4 }}
              href="mailto:aagbaje343@gmail.com"
              className="w-11 h-11 md:w-12 md:h-12 rounded-full glass flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300 glow-hover border border-blue-500/20"
            >
              <FaEnvelope className="text-lg md:text-xl text-blue-400" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-400 text-xs md:text-sm"
          >
            <p className="flex items-center justify-center gap-2 flex-wrap">
              Made with <FaHeart className="text-red-500 animate-pulse" /> by Abdulrahman Agbaje
            </p>
            <p className="mt-3">
              &copy; {new Date().getFullYear()} All rights reserved. Built with Next.js, Tailwind CSS & Framer Motion.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
