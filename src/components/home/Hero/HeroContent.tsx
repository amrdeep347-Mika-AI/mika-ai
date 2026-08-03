"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl"
    >
      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2">

        <Sparkles size={18} className="text-cyan-300" />

        <span className="text-cyan-200 text-sm">
          AI Command Center
        </span>

      </div>

      {/* Heading */}

      <div className="space-y-6 mt-4">

  <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-semibold">
    THE FUTURE OF LEARNING
  </p>

  <h1 className="text-5xl lg:text-6xl font-black leading-[0.9] text-white">
    Meet
  </h1>

  <h1 className="text-5xl lg:text-6xl font-black leading-[0.9] bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
    Professor Mika
  </h1>

</div>

      {/* Description */}

      <p className="mt-4 text-base leading-relaxed text-slate-300">
  Your Personal AI Teacher
  that thinks, teaches,understands, 
  remembers your learning style,
  and helps you master every subject through
  interactive conversations.
</p>
  <div className="mt-12 flex flex-wrap gap-5">

  <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-8 py-4 font-bold text-white shadow-[0_0_50px_rgba(0,180,255,.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_70px_rgba(0,220,255,.6)]">
    <span className="relative z-10 flex items-center gap-2">
      🚀 Start Learning
    </span>

    <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
  </button>

  <button className="rounded-2xl border border-cyan-400/30 bg-white/5 px-8 py-4 font-semibold text-cyan-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-500/10 hover:text-white">
    ▶ Watch Demo
  </button>

</div>
<div className="flex flex-wrap gap-10 mt-14">

  <div>
    <h2 className="text-4xl font-bold text-cyan-300">
      12+
    </h2>

    <p className="text-slate-400">
      Classes
    </p>
  </div>

  <div>
    <h2 className="text-4xl font-bold text-cyan-300">
      5000+
    </h2>

    <p className="text-slate-400">
      Lessons
    </p>
  </div>

  <div>
    <h2 className="text-4xl font-bold text-cyan-300">
      AI
    </h2>

    <p className="text-slate-400">
      Personal Tutor
    </p>
  </div>

</div>

    </motion.div>
  );
}