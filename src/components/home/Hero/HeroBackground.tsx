"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Main Background */}

      <div className="absolute inset-0 bg-[#050B1F]" />

      {/* ===================================================== */}
      {/* Left Cyan Glow */}
      {/* ===================================================== */}

      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [-20, 20, -20],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-52 top-10 w-[820px] h-[820px] rounded-full bg-cyan-500/12 blur-[180px]"
      />

      {/* ===================================================== */}
      {/* Right Blue Glow */}
      {/* ===================================================== */}

      <motion.div
        animate={{
          x: [40, -40, 40],
          y: [20, -20, 20],
          scale: [1.05, 1, 1.05],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 top-0 w-[900px] h-[900px] rounded-full bg-blue-500/12 blur-[220px]"
      />

      {/* ===================================================== */}
      {/* Center Glow */}
      {/* ===================================================== */}

      <motion.div
        animate={{
          opacity: [0.18, 0.32, 0.18],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[180px]"
      />

      {/* ===================================================== */}
      {/* Grid */}
      {/* ===================================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* ===================================================== */}
      {/* Top Gradient */}
      {/* ===================================================== */}

      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cyan-500/5 to-transparent" />

      {/* ===================================================== */}
      {/* Bottom Fade */}
      {/* ===================================================== */}

      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#050B1F] to-transparent" />

      {/* ===================================================== */}
      {/* Animated Blur Blob 1 */}
      {/* ===================================================== */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[20%] top-[18%] w-48 h-48 rounded-full bg-cyan-400/10 blur-[80px]"
      />

      {/* ===================================================== */}
      {/* Animated Blur Blob 2 */}
      {/* ===================================================== */}

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[18%] bottom-[12%] w-64 h-64 rounded-full bg-blue-500/10 blur-[90px]"
      />

    </div>
  );
}