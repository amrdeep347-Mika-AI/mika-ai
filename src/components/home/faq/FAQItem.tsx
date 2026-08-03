"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface Props {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
}

export default function FAQItem({
  question,
  answer,
  open,
  onClick,
}: Props) {
  return (
    <motion.div
      layout
      whileHover={{
        y: -2,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        group
        overflow-hidden
        rounded-3xl
        border
        transition-all
        duration-300
        ${
          open
            ? "border-cyan-400/40 bg-cyan-500/5 shadow-[0_0_35px_rgba(34,211,238,.10)]"
            : "border-cyan-500/15 bg-gradient-to-b from-[#111c2e] to-[#0c1424]"
        }
      `}
    >
      {/* Question */}

      <button
        onClick={onClick}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-6
          px-8
          py-7
          text-left
        "
      >
        <h3
          className={`
            text-lg
            font-semibold
            transition-colors
            ${
              open
                ? "text-cyan-300"
                : "text-white group-hover:text-cyan-300"
            }
          `}
        >
          {question}
        </h3>

        <motion.div
          animate={{
            rotate: open ? 45 : 0,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-cyan-500/20
            bg-cyan-500/10
            text-cyan-300
            shrink-0
          "
        >
          <Plus size={20} />
        </motion.div>
      </button>

      {/* Answer */}

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 px-8 pb-8 pt-6">
              <p className="leading-8 text-slate-400">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}