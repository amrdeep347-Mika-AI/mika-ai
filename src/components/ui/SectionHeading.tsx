"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  center = true,
}: SectionHeadingProps) {
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
      }}
      transition={{
        duration: 0.6,
      }}
      className={center ? "text-center" : ""}
    >
      {/* Badge */}

      {badge && (
        <p
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.35em]
            text-cyan-400
          "
        >
          {badge}
        </p>
      )}

      {/* Title */}

      <h2
        className="
          mt-5
          text-5xl
          font-black
          leading-[0.95]
          text-white
          lg:text-6xl
        "
      >
        {title}
      </h2>

      {/* Description */}

      {description && (
        <p
          className={`
            mt-6
            text-base
            leading-relaxed
            text-slate-300
            ${
              center
                ? "mx-auto max-w-3xl"
                : "max-w-2xl"
            }
          `}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}