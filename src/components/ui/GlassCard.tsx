"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className={`
        rounded-3xl
        border
        border-cyan-400/20
        bg-white/10
        backdrop-blur-xl
        shadow-2xl
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}