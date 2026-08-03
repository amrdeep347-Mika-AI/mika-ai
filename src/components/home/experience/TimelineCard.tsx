"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface TimelineCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  number: string;
}

export default function TimelineCard({
  icon: Icon,
  title,
  description,
  color,
  number,
}: TimelineCardProps) {
  return (
    <motion.div
  initial={{
    opacity: 0,
    y: 60,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.3,
  }}
  transition={{
    duration: 0.6,
    delay: Number(number) * 0.15,
  }}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-cyan-500/20
        bg-gradient-to-b
        from-[#111c2e]
        to-[#0c1424]
        p-6
        text-center
        h-[220px]
      "
    >
      {/* Hover Glow */}

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(circle at top, ${color}20, transparent 70%)`,
        }}
      />

      {/* Icon */}

      <div
        className="relative mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
        style={{
          background: `${color}20`,
        }}
      >
        <Icon
          size={24}
          color={color}
        />
      </div>

      {/* Title */}

      <h3 className="relative text-xl font-bold text-white">
        {title}
      </h3>

      {/* Description */}

      <p className="relative mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>

      <div className="relative mt-5 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
  AI STEP
</div>
    </motion.div>
  );
}