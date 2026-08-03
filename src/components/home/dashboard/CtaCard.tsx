"use client";

import { Sparkles, ArrowRight } from "lucide-react";

export default function CtaCard() {
  return (
    <div
      className="
        relative
        h-[180px]
        rounded-[10px]
        overflow-hidden
        border
        border-cyan-400/20
        bg-[#081321]/90
        backdrop-blur-xl
        px-5
        py-4
        flex
        flex-col
        justify-between
      "
    >
      {/* Glow */}
      <div className="absolute -right-16 -top-16 w-52 h-52 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative z-10">

        {/* Icon */}
        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
          <Sparkles
            size={18}
            className="text-cyan-300"
          />
        </div>

        {/* Title */}
        <h2 className="mt-2 text-xl font-bold text-white leading-tight">
          Start Learning with Mika AI
        </h2>

        {/* Description */}
        <p className="mt-1 text-xs text-slate-400">
          Your personal AI teacher is ready.
        </p>

      </div>

      {/* Button */}
      <button
        className="
          flex
          items-center
          justify-center
          gap-2
          rounded-lg
          bg-gradient-to-r
          from-cyan-400
          to-blue-600
          py-2
          text-sm
          font-semibold
          text-white
          transition-all
          duration-300
          hover:scale-[1.02]
        "
      >
        Start Learning

        <ArrowRight size={16} />
      </button>
    </div>
  );
}