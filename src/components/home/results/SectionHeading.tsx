"use client";

import { motion } from "framer-motion";

export default function SectionHeading() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="mx-auto mb-16 max-w-3xl text-center"
    >
      {/* Small Heading */}

      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400">
        RESULTS THAT SPEAK
      </p>

      {/* Main Heading */}

      <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
        Learning That
        <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
          {" "}
          Delivers Results
        </span>
      </h2>

      {/* Description */}

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
        Professor Mika doesn't just explain concepts — it adapts to every
        student, tracks progress, and helps learners build confidence with
        interactive AI-powered education.
      </p>
    </motion.div>
  );
}