"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  icon?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export default function PrimaryButton({
  children,
  onClick,
  icon = true,
  fullWidth = false,
  className = "",
}: PrimaryButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
        boxShadow: "0 0 60px rgba(0,220,255,.45)",
      }}
      whileTap={{ scale: .98 }}
      onClick={onClick}
      className={`
        group relative overflow-hidden rounded-2xl
        bg-gradient-to-r
        from-cyan-400
        via-sky-500
        to-blue-600
        px-8 py-4
        font-bold
        text-white
        shadow-[0_0_50px_rgba(0,180,255,.35)]
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      <span className="relative z-10 flex items-center justify-center gap-3">
        {children}
        {icon && <ArrowRight size={18} />}
      </span>

      <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
    </motion.button>
  );
}