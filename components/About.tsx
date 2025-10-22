"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="relative py-20 md:py-32 bg-darker" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30" />
              <div className="relative glass rounded-2xl p-2 glow">
                <img
                  src="/images/profile.jpg"
                  alt="Abdulrahman Agbaje"
                  className="w-full h-auto rounded-xl object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/myself.jpg";
                  }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Full-Stack Software Engineer
            </h3>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I am a <span className="text-primary font-semibold">Full-Stack Software Engineer</span> and
                graduate of Aptech Computer Education (ADSE), passionate about crafting modern web
                applications and digital solutions that solve real-world problems.
              </p>

              <p>
                My experience includes academic software projects, tutoring, and exploring new
                technologies. I value <span className="text-secondary font-semibold">teamwork</span>,{" "}
                <span className="text-secondary font-semibold">clarity</span>, and{" "}
                <span className="text-secondary font-semibold">continuous growth</span>.
              </p>

              <p>
                Based in <span className="text-primary font-semibold">Lagos, Nigeria</span>, I&apos;m
                committed to delivering high-quality software solutions and staying current with
                industry best practices and emerging technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="glass rounded-lg px-6 py-3">
                <p className="text-primary font-semibold text-sm">Location</p>
                <p className="text-white">Lagos, Nigeria</p>
              </div>
              <div className="glass rounded-lg px-6 py-3">
                <p className="text-primary font-semibold text-sm">Education</p>
                <p className="text-white">ADSE Graduate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
