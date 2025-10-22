"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Student Management App",
    description: "A comprehensive CRUD-based system for managing student data with authentication, search, and filtering capabilities.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: "/images/portfolio.png",
    preview: "#",
    code: "#",
  },
  {
    title: "Task Tracker App",
    description: "Feature-rich to-do list application with local storage, progress tracking, categories, and deadline management.",
    tech: ["React", "TypeScript", "LocalStorage", "Tailwind"],
    image: "/images/portfolio.png",
    preview: "#",
    code: "#",
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather application using OpenWeather API with 5-day forecasts, location search, and weather alerts.",
    tech: ["React", "API Integration", "CSS3", "JavaScript"],
    image: "/images/portfolio.png",
    preview: "#",
    code: "#",
  },
  {
    title: "Portfolio Template Clone",
    description: "Modern, responsive portfolio layout with smooth animations, dark mode, and optimized performance.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: "/images/portfolio.png",
    preview: "#",
    code: "#",
  },
  {
    title: "Landing Page UI",
    description: "Professional landing page concept with hero section, feature highlights, testimonials, and contact form.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    image: "/images/portfolio.png",
    preview: "#",
    code: "#",
  },
  {
    title: "Simple Chat UI Mockup",
    description: "Clean and intuitive chat interface design with message bubbles, typing indicators, and emoji support.",
    tech: ["React", "CSS3", "JavaScript", "UI/UX"],
    image: "/images/portfolio.png",
    preview: "#",
    code: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="relative py-20 md:py-32 bg-dark" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my recent work showcasing innovative solutions and technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative glass rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/portfolio.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-4 bg-gradient-to-r from-primary to-secondary text-white text-center rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Preview
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-4 glass text-white text-center rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaGithub className="text-lg" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
