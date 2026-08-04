"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Sparkles, Mic } from "lucide-react";

export default function LoginHero() {
  return (
    <div className="relative flex items-center justify-center h-full">

      {/* Main Glow */}
      <div className="absolute w-[520px] h-[520px] rounded-full bg-cyan-400/15 blur-[120px]" />

      {/* Floating Card 1 */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-16 left-0 backdrop-blur-xl bg-white/10 border border-cyan-400/20 rounded-2xl px-5 py-3"
      >
        <div className="flex items-center gap-2 text-cyan-300">
          <Brain size={18} />
          <span className="font-semibold text-sm">
            AI Brain Active
          </span>
        </div>
      </motion.div>

      {/* Floating Card 2 */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-36 right-0 backdrop-blur-xl bg-white/10 border border-cyan-400/20 rounded-2xl px-5 py-3"
      >
        <div className="flex items-center gap-2 text-cyan-300">
          <Mic size={18} />
          <span className="font-semibold text-sm">
            Voice Assistant
          </span>
        </div>
      </motion.div>

      {/* Professor Mika */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="relative z-20"
      >
        <Image
          src="/avatars/professor-mika/idle-transparent.png"
          alt="Professor Mika"
          width={420}
          height={420}
          priority
          className="drop-shadow-[0_25px_90px_rgba(0,220,255,0.45)]"
        />
      </motion.div>

      {/* Bottom Text */}
      <div className="absolute bottom-20 text-center max-w-md">
        <h2 className="text-4xl font-black text-white">
          Welcome Back
        </h2>

        <p className="mt-3 text-slate-200 leading-6">
          Your Personal AI Teacher is waiting.
          Continue your learning journey with Professor Mika.
        </p>

      </div>

    </div>
  );
}