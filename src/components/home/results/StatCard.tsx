"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  value: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
}

export default function StatCard({
  value,
  title,
  subtitle,
  icon: Icon,
  color,
}: StatCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
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
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
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
      "
    >
      {/* Hover Glow */}

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `radial-gradient(circle at top, ${color}18, transparent 70%)`,
        }}
      />

      {/* Icon */}

      <div
        className="relative flex h-12 w-12 items-center justify-center rounded-xl"
        style={{
          background: `${color}20`,
        }}
      >
        <Icon
          size={24}
          color={color}
        />
      </div>

      {/* Value */}

      <h3 className="relative mt-6 text-5xl font-black text-white">
        {value}
      </h3>

      {/* Title */}

      <h4 className="relative mt-3 text-lg font-bold text-white">
        {title}
      </h4>

      {/* Subtitle */}

      <p className="relative mt-2 text-sm leading-6 text-slate-400">
        {subtitle}
      </p>

      {/* Bottom Badge */}

      <div className="relative mt-6 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
        Verified
      </div>
    </motion.div>
  );
}