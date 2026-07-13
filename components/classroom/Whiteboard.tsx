"use client";

import { motion } from "framer-motion";

interface WhiteboardProps {
  lesson: string;
}

export default function Whiteboard({
  lesson,
}: WhiteboardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-inner h-full p-8 overflow-hidden">

      <h2 className="text-4xl font-black mb-8">
        {lesson}
      </h2>

      {/* Animated Board */}
      <div className="flex flex-col items-center justify-center h-[260px]">

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl font-black text-indigo-600"
        >
          1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
          className="text-5xl mt-10"
        >
          🍎 🍎 🍎 🍎 🍎
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 2,
            duration: 0.5,
          }}
          className="text-3xl font-bold mt-10"
        >
          Count = 5
        </motion.div>

      </div>

    </div>
  );
}