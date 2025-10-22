"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const education = [
  {
    institution: "Aptech Computer Education",
    degree: "Advanced Diploma in Software Engineering (ADSE)",
    year: "2023",
    type: "Education",
    icon: FaGraduationCap,
    description:
      "Comprehensive software engineering program covering full-stack development, databases, and modern programming practices.",
  },
  {
    institution: "New Horizons",
    degree: "CompTIA A+ Certification",
    year: "2019-2020",
    type: "Certification",
    icon: FaCertificate,
    description:
      "Industry-standard certification for IT operational roles, covering hardware, software, and troubleshooting.",
  },
  {
    institution: "New Horizons",
    degree: "CompTIA Network+ Certification",
    year: "2019-2020",
    type: "Certification",
    icon: FaCertificate,
    description:
      "Networking fundamentals, infrastructure, operations, security, and troubleshooting.",
  },
  {
    institution: "New Horizons",
    degree: "Internet & Core Computing",
    year: "2019-2020",
    type: "Certification",
    icon: FaCertificate,
    description:
      "Foundational computing skills including internet technologies and core computing concepts.",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="education" className="relative py-20 md:py-32 bg-dark" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic achievements and professional certifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-6 md:p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="text-3xl text-white" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                        {item.degree}
                      </h3>
                      <span className="text-primary font-semibold text-sm md:text-base mt-1 md:mt-0">
                        {item.year}
                      </span>
                    </div>

                    <h4 className="text-lg text-secondary font-semibold mb-3">
                      {item.institution}
                    </h4>

                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-4">
                      <span className="inline-block px-4 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20">
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {index < education.length - 1 && (
                <div className="hidden md:block absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-primary to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
