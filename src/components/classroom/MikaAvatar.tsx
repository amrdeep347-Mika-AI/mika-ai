"use client";

import Image from "next/image";

interface Props {
  speech: string;
  isSpeaking: boolean;
  pose?:
    | "idle"
    | "talking"
    | "thinking"
    | "pointing"
    | "writing"
    | "celebrating"
    | "waving";
}

export default function MikaAvatar({
  speech,
  isSpeaking,
  pose = "idle",
}: Props) {
  const image =
    pose === "talking"
      ? "/avatars/professor-mika/talking.png"
      : pose === "thinking"
      ? "/avatars/professor-mika/thinking.png"
      : pose === "pointing"
      ? "/avatars/professor-mika/pointing.png"
      : pose === "writing"
      ? "/avatars/professor-mika/writing.png"
      : pose === "celebrating"
      ? "/avatars/professor-mika/celebrating.png"
      : pose === "waving"
      ? "/avatars/professor-mika/waving.png"
      : "/avatars/professor-mika/idle.png";

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <div className="flex justify-center">

        <Image
  key={pose}
  src={image}
  alt="Professor Mika"
  width={340}
  height={500}
  priority
  className={`
  animate-breathe
  transition-all
  duration-500
  ease-in-out
  ${
    isSpeaking
      ? "scale-105"
      : "scale-100"
  }
`}
/>
<div className="flex justify-center -mt-8 mb-4">

  <div className="relative">

    <div className="w-7 h-7 rounded-full bg-cyan-400 animate-pulse" />

    <div className="absolute inset-0 rounded-full bg-cyan-300 blur-lg animate-ping opacity-40" />

  </div>

</div>

      </div>

      <h2 className="text-3xl font-bold text-center mt-4">
        Professor Mika
      </h2>

      <p className="mt-6 text-lg leading-8 text-center">
        {speech}
      </p>
      <div className="mt-6 rounded-2xl bg-slate-50 border border-cyan-200 p-5">

  <div className="flex items-center justify-between mb-3">

    <span className="text-sm font-semibold text-cyan-700">
      LIVE AI TEACHER
    </span>

    <div className="flex items-center gap-2">

      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

      <span className="text-xs text-slate-500">
        Online
      </span>

    </div>

  </div>

  <p className="text-lg leading-8">
    {speech}
  </p>

</div>

      {isSpeaking && (
  <div className="flex justify-center mt-5 gap-2">

    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="w-2 rounded-full bg-cyan-400 animate-pulse"
        style={{
          height: `${10 + (i % 2) * 8}px`,
          animationDelay: `${i * 0.12}s`,
        }}
      />
    ))}

  </div>
)}
    </div>
  );
}