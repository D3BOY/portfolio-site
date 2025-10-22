"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaLinux,
  FaDatabase,
  FaCode,
  FaUsers,
  FaComments,
  FaLightbulb,
  FaTrophy,
} from "react-icons/fa";
import { SiMysql, SiJson } from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "Python", icon: FaPython, color: "#3776ab" },
      { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
    ],
  },
  {
    title: "Front-End",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952b3" },
      { name: "React.js", icon: FaReact, color: "#61dafb" },
      { name: "AngularJS", icon: FaAngular, color: "#dd0031" },
    ],
  },
  {
    title: "Back-End & Tools",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Linux", icon: FaLinux, color: "#fcc624" },
      { name: "Agile & DevOps", icon: FaCode, color: "#0ea5e9" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
      { name: "SQL Server", icon: FaDatabase, color: "#cc2927" },
      { name: "Database Design", icon: FaDatabase, color: "#06b6d4" },
    ],
  },
  {
    title: "Technical Skills",
    skills: [
      { name: "JSON", icon: SiJson, color: "#000000" },
      { name: "OOP", icon: FaCode, color: "#0ea5e9" },
      { name: "Web Apps", icon: FaReact, color: "#3b82f6" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Teamwork", icon: FaUsers, color: "#0ea5e9" },
      { name: "Communication", icon: FaComments, color: "#06b6d4" },
      { name: "Leadership", icon: FaTrophy, color: "#3b82f6" },
      { name: "Problem Solving", icon: FaLightbulb, color: "#0ea5e9" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="relative py-20 md:py-32 bg-darker" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer group"
                  >
                    <skill.icon
                      className="text-4xl mb-2 transition-all duration-300 group-hover:scale-125"
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm text-gray-300 text-center font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
