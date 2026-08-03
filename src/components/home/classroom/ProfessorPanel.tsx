"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Mic, Sparkles } from "lucide-react";

export default function ProfessorPanel() {
  return (
    <div className="h-[470px] rounded-md border border-slate-600 bg-[#0d1323] overflow-hidden shadow-2xl">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />

      {/* Professor */}

      <div className="relative flex justify-center pt-4">

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/avatars/professor-mika/idle.png"
            alt="Professor Mika"
            width={220}
            height={330}
            className="drop-shadow-[0_20px_80px_rgba(0,220,255,.35)]"
          />
        </motion.div>

      </div>

      {/* Name */}

      <div className="text-center mt-0">

        <h3 className="text-lg font-bold text-white">
          Professor Mika
        </h3>

        <p className="text-cyan-300 text-sm mt-1">
          Personal AI Teacher
        </p>

      </div>

      {/* Status */}

      <div className="mt-3 px-6 space-y-2">

        <div className="flex items-center justify-between rounded-2xl bg-cyan-500/10 border border-cyan-400/20 px-4 py-2">

          <div className="flex items-center gap-2">

            <Brain className="text-cyan-300" />

            <span className="text-white">
              AI Brain
            </span>

          </div>

          <span className="text-emerald-400 font-semibold">
            Active
          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-cyan-500/10 border border-cyan-400/20 px-4 py-2">

          <div className="flex items-center gap-2">

            <Mic className="text-cyan-300" />

            <span className="text-white">
              Voice
            </span>

          </div>

          <span className="text-emerald-400 font-semibold">
            Listening
          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-cyan-500/10 border border-cyan-400/20 px-4 py-2">

          <div className="flex items-center gap-2">

            <Sparkles className="text-cyan-300" />

            <span className="text-white">
              Learning Mode
            </span>

          </div>

          <span className="text-emerald-400 font-semibold">
            Personalized
          </span>

        </div>

      </div>

    </div>
  );
}