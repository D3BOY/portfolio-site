"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">Abdulrahman</span>{" "}
              <span className="text-gradient">Adebola Agbaje</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-6">
              Full-Stack Software Engineer
            </h2>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              I&apos;m a results-driven software engineer passionate about building
              efficient and scalable web applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
          >
            <a
              href="/Resume.pdf"
              download
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              Download CV
            </a>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/abdulrahman-agbaje-9723b9217/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all duration-300 glow-hover"
              >
                <FaLinkedin className="text-2xl text-primary" />
              </a>
              <a
                href="mailto:aagbaje343@gmail.com"
                className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all duration-300 glow-hover"
              >
                <FaEnvelope className="text-2xl text-primary" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16"
          >
            <a
              href="#about"
              className="inline-block animate-bounce"
            >
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-darker/50 to-darker z-0" />
    </section>
  );
}
