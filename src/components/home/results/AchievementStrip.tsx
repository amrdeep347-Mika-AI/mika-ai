"use client";

import { motion } from "framer-motion";
import { achievements } from "./data";

export default function AchievementStrip() {
  return (
    <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {achievements.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
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
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -6,
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
              className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle at top, ${item.color}18, transparent 70%)`,
              }}
            />

            {/* Icon */}

            <div
              className="relative flex h-12 w-12 items-center justify-center rounded-xl"
              style={{
                background: `${item.color}20`,
              }}
            >
              <Icon
                size={24}
                color={item.color}
              />
            </div>

            {/* Title */}

            <h3 className="relative mt-5 text-xl font-bold text-white">
              {item.title}
            </h3>

            {/* Description */}

            <p className="relative mt-3 text-sm leading-6 text-slate-400">
              {item.description}
            </p>

            {/* Badge */}

            <div className="relative mt-5 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
              Mika AI
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}