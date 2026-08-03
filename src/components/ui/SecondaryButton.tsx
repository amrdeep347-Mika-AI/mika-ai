"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function SecondaryButton({
  children,
  onClick,
  className = "",
}: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: .98,
      }}
      onClick={onClick}
      className={`
        rounded-2xl
        border
        border-cyan-400/30
        bg-white/5
        backdrop-blur-xl
        px-8
        py-4
        font-semibold
        text-cyan-300
        transition-all
        duration-300
        hover:border-cyan-300
        hover:bg-cyan-500/10
        hover:text-white
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}