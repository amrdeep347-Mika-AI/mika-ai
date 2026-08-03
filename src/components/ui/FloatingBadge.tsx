"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  text: string;
  color?: string;
}

export default function FloatingBadge({
  icon: Icon,
  text,
  color = "text-cyan-300",
}: Props) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        backdrop-blur-xl
        bg-white/10
        border
        border-cyan-400/20
        rounded-2xl
        px-5
        py-3
        shadow-2xl
      "
    >
      <div className={`flex items-center gap-2 ${color}`}>
        <Icon size={18} />
        <span className="font-semibold text-sm">
          {text}
        </span>
      </div>
    </motion.div>
  );
}