"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  GraduationCap,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";

import TimelineCard from "./TimelineCard";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Ask Anything",
    description:
      "Type or speak any topic you want to learn. Mika understands instantly.",
    color: "#06b6d4",
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "AI Teaching",
    description:
      "Professor Mika explains every concept with visuals, stories and examples.",
    color: "#3b82f6",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Practice",
    description:
      "Interactive quizzes, challenges and instant feedback reinforce learning.",
    color: "#10b981",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Grow",
    description:
      "Your progress is tracked automatically so every lesson gets smarter.",
    color: "#8b5cf6",
  },
];

export default function Timeline() {
  return (
    <div className="relative">

      {/* Animated Timeline (Desktop) */}

      <div className="absolute left-0 right-0 top-8 hidden lg:block">

        {/* Base Line */}

        <div className="relative mx-auto h-[2px] w-[82%] overflow-hidden rounded-full bg-cyan-500/10">

          <motion.div
            animate={{
              x: ["-100%", "450%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              left-0
              top-0
              h-full
              w-40
              bg-gradient-to-r
              from-transparent
              via-cyan-300
              to-transparent
            "
          />

        </div>

      </div>

      {/* Timeline Nodes */}

      <div className="absolute left-0 right-0 top-3 hidden lg:flex justify-center">

        <div className="w-[82%] flex justify-between">

          {["01", "02", "03", "04"].map((item) => (

            <motion.div
              key={item}
              animate={{
                scale: [1, 1.15, 1],
                boxShadow: [
                  "0 0 0px rgba(34,211,238,.3)",
                  "0 0 20px rgba(34,211,238,.8)",
                  "0 0 0px rgba(34,211,238,.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Number(item) * 0.25,
              }}
              className="
                h-10
                w-10
                rounded-full
                border
                border-cyan-400/40
                bg-[#0d1323]
                flex
                items-center
                justify-center
                text-sm
                font-bold
                text-cyan-300
              "
            >
              {item}
            </motion.div>

          ))}

        </div>

      </div>

      {/* Cards */}

      <div className="grid gap-8 pt-16 lg:grid-cols-4">

        {steps.map((step) => (
          <TimelineCard
            key={step.title}
            {...step}
          />
        ))}

      </div>

    </div>
  );
}