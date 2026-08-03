"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SubjectCardProps {
  icon: LucideIcon;
  title: string;
  lessons: string;
  description: string;
  color: string;
}

export default function SubjectCard({
  icon: Icon,
  title,
  lessons,
  description,
  color,
}: SubjectCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="
        group
        relative
        overflow-hidden
        rounded-xl
        border
        border-cyan-500/20
        bg-gradient-to-b
        from-[#111c2e]
        to-[#0c1424]
        p-5
        cursor-pointer
      "
    >
      {/* Glow */}

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(circle at top, ${color}20, transparent 70%)`,
        }}
      />

      {/* Header */}

      <div className="relative flex items-center justify-between">

        <div className="flex items-center gap-2">

          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{
              background: `${color}20`,
            }}
          >
            <Icon
              size={16}
              color={color}
            />
          </div>

          <div>

            <h3 className="text-base font-bold text-white">
              {title}
            </h3>

            <p className="text-xs text-slate-400">
              {lessons}
            </p>

          </div>

        </div>

        <ArrowRight
          size={18}
          className="text-cyan-300 transition-transform duration-300 group-hover:translate-x-1"
        />

      </div>

      {/* Description */}

      <p className="relative mt-3 text-sm leading-6 text-slate-400">
        <p className="mt-3 text-xs leading-5 text-slate-400 line-clamp-2">
  {description}
</p>
      </p>

      {/* Badge */}

      <div className="relative mt-3 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
        AI Powered
      </div>
    </motion.div>
  );
}