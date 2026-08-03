"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Mic, CheckCircle } from "lucide-react";

export default function HeroProfessor() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative flex justify-center items-center w-full h-full"
    >
      {/* Glow */}
      {/* Main Glow */}
      <div className="absolute w-[480px] h-[480px] rounded-full bg-cyan-400/15 blur-[100px]" />

      {/* Main Ring */}
      <div className="absolute w-[500px] h-[500px] rounded-full border border-cyan-400/15" />

      {/* Inner Glow */}
      <div className="absolute w-[360px] h-[360px] rounded-full bg-cyan-300/10 blur-3xl" />
      {/* Top Left Card */}
      <motion.div
  animate={{
    y: [0, -12, 0],
    scale: [1, 1.03, 1],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
        className="absolute top-8 -left-16 z-10
        backdrop-blur-xl bg-white/10
        border border-cyan-400/20
        rounded-2xl px-5 py-3 shadow-2xl"
      >
        <div className="flex items-center gap-2 text-cyan-300">
          <Brain size={18} />
          <span className="font-semibold text-sm">
            AI Brain Active
          </span>
        </div>
      </motion.div>

      {/* Top Right Card */}
      <motion.div
        animate={{
  y: [0, 10, 0],
  scale: [1, 1.02, 1],
}}
transition={{
  duration: 5,
  repeat: Infinity,
  ease: "easeInOut",
}}
        className="absolute top-20 -right-16 z-10
        backdrop-blur-xl bg-white/10
        border border-cyan-400/20
        rounded-2xl px-5 py-3 shadow-2xl"
      >
        <div className="flex items-center gap-2 text-cyan-300">
          <Mic size={18} />
          <span className="font-semibold text-sm">
            Voice Ready
          </span>
        </div>
      </motion.div>

      {/* Bottom Left Card */}
      <motion.div
  animate={{
    y: [0, -12, 0],
    scale: [1, 1.03, 1],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
        className="absolute bottom-16 -left-20 z-10
        backdrop-blur-xl bg-white/10
        border border-emerald-400/20
        rounded-2xl px-5 py-3 shadow-2xl"
      >
        <div className="flex items-center gap-2 text-emerald-300">
          <CheckCircle size={18} />
          <span className="font-semibold text-sm">
            Professor Online
          </span>
        </div>
      </motion.div>

      {/* Professor Mika */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-20 flex items-center justify-center w-[500px] h-[500px]"
      >
        <div className="relative z-20 flex justify-center">
<div className="relative w-[450px] h-[340px]">
  <Image
    src="/avatars/professor-mika/idle-transparent.png"
    alt="Professor Mika"
    width={400}
    height={580}
    priority
    className="relative z-20 object-contain drop-shadow-[0_25px_90px_rgba(0,220,255,0.45)]"
  />
</div>
  {/* Holographic Platform */}
<div className="absolute bottom-1 left-10/28 -translate-x-1/2 z-20">

  {/* Outer Ring */}
  <div className="w-64 h-6 rounded-full border border-cyan-400/40 bg-cyan-400/5" />

  {/* Glow */}
  <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl" />

  {/* Core */}
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-2 rounded-full bg-cyan-300 blur-sm" />

</div>

</div>

        {/* Bottom Glow */}
        <div className="absolute bottom-0 w-[500px] h-[220px] bg-cyan-400/20 blur-[120px]" />
      </motion.div>
    </motion.div>
  );
}