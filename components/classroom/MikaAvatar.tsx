"use client";

import { motion } from "framer-motion";

interface Props {
  speaking: boolean;
}

export default function MikaAvatar({
  speaking,
}: Props) {
  return (
    <div className="flex flex-col items-center">

      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: speaking
            ? [-2, 2, -2]
            : 0,
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="text-9xl"
      >
        👩‍🏫
      </motion.div>

      <motion.div
        animate={{
          scale: speaking
            ? [1, 1.1, 1]
            : 1,
        }}
        transition={{
          repeat: Infinity,
          duration: 0.4,
        }}
        className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-full"
      >
        {speaking
          ? "🎙️ Speaking..."
          : "😊 Listening"}
      </motion.div>

    </div>
  );
}