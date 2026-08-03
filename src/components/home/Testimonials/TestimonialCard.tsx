"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Star } from "lucide-react";

interface Props {
  name: string;
  initials: string;
  grade: string;
  review: string;
  rating: number;
  gradient: string;
}

export default function TestimonialCard({
  name,
  initials,
  grade,
  review,
  rating,
  gradient,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        h-full
        overflow-hidden
        rounded-3xl
        border
        border-cyan-500/20
        bg-gradient-to-b
        from-[#111c2e]
        to-[#0c1424]
        p-7
      "
    >
      {/* Hover Glow */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(circle at top, rgba(34,211,238,.18), transparent 70%)",
        }}
      />

      {/* Stars */}

      <div className="relative flex items-center gap-1">

        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}

      </div>

      {/* Review */}

      <p className="relative mt-6 text-[16px] leading-8 text-slate-300">
        "{review}"
      </p>

      {/* Divider */}

      <div className="relative my-7 h-px bg-white/10" />

      {/* Student */}

      <div className="relative flex items-center gap-4">

        {/* Avatar */}

        <div
          className={`
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            ${gradient}
            text-lg
            font-bold
            text-white
            shadow-lg
          `}
        >
          {initials}
        </div>

        {/* Info */}

        <div className="flex-1">

          <h3 className="font-bold text-white">
            {name}
          </h3>

          <p className="text-sm text-slate-400">
            {grade}
          </p>

        </div>

      </div>

      {/* Badge */}

      <div
        className="
          relative
          mt-6
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-cyan-500/20
          bg-cyan-500/10
          px-3
          py-1.5
          text-[11px]
          font-semibold
          uppercase
          tracking-wider
          text-cyan-300
        "
      >
        <BadgeCheck size={14} />

        Verified Student

      </div>

      {/* Bottom Glow */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-0
          bg-gradient-to-r
          from-cyan-400
          to-blue-500
          transition-all
          duration-500
          group-hover:w-full
        "
      />

    </motion.div>
  );
}