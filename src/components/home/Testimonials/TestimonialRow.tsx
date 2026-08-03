"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Testimonial } from "./data";
import TestimonialCard from "./TestimonialCard";

interface Props {
  items: Testimonial[];
  reverse?: boolean;
}

export default function TestimonialRow({
  items,
  reverse = false,
}: Props) {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="relative overflow-hidden py-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        animate={{
          x: paused
            ? undefined
            : reverse
            ? ["-50%", "0%"]
            : ["0%", "-50%"],
        }}
        transition={{
          duration: 45,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex w-max gap-6"
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="w-[360px] flex-shrink-0"
          >
            <TestimonialCard
              name={item.name}
              initials={item.initials}
              grade={item.grade}
              review={item.review}
              rating={item.rating}
              gradient={item.gradient}
            />
          </div>
        ))}
      </motion.div>

      {/* Fade Left */}

      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#050b16] to-transparent" />

      {/* Fade Right */}

      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#050b16] to-transparent" />
    </div>
  );
}