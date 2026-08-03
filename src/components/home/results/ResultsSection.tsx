"use client";

import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";
import StatsGrid from "./StatsGrid";
import AchievementStrip from "./AchievementStrip";

export default function ResultsSection() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            left-1/2
            top-24
            -translate-x-1/2
            h-[600px]
            w-[1100px]
            rounded-full
            bg-cyan-500/10
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            right-0
            bottom-0
            h-[300px]
            w-[300px]
            rounded-full
            bg-blue-500/10
            blur-[120px]
          "
        />

      </div>

      {/* Content */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
        className="relative z-10 mx-auto max-w-7xl px-6"
      >

        <SectionHeading />

        <StatsGrid />

        <AchievementStrip />

      </motion.div>

    </section>
  );
}