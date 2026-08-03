"use client";

import { useEffect, useState } from "react";

const lessons = [
  {
    subject: "Mathematics",
    title: "Linear Equations",
    speech: "Let's solve this together. First subtract 3 from both sides.",
    lines: ["2x + 3 = 11", "2x = 8", "x = 4 ✓"],
  },
  {
    subject: "Science",
    title: "Atoms",
    speech: "Everything around us is made of atoms.",
    lines: ["⚛ Proton", "⚪ Neutron", "🔵 Electron"],
  },
  {
    subject: "Biology",
    title: "Human Cell",
    speech: "The cell is the basic unit of life.",
    lines: ["🧬 Nucleus", "🟢 Cell Membrane", "🟡 Cytoplasm"],
  },
  {
    subject: "Geography",
    title: "Earth",
    speech: "Our planet is covered by land and oceans.",
    lines: ["🌍 Earth", "🗺 Continents", "🌊 Oceans"],
  },
];

export default function Whiteboard() {
  const [currentLesson, setCurrentLesson] = useState(0);

  const lesson = lessons[currentLesson];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLesson((prev) => (prev + 1) % lessons.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
   
  <div className="h-[470px] rounded-md border border-slate-600 bg-[#0d1323] overflow-hidden shadow-2xl">

    {/* Header */}

    <div className="h-14 px-6 flex items-center bg-[#1b2d4d] border-b border-cyan-400/30">

  {/* Left */}

  <div className="w-1/3">

    <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-300">
      Interactive Board
    </p>

  </div>

  {/* Center */}

  <div className="w-1/3 text-center">

    <h2 className="text-xl font-bold text-white tracking-wide">
      Linear Equations
    </h2>

  </div>

  {/* Right */}

  <div className="w-1/3 flex justify-end">

    <div>

      <p className="text-[11px] text-slate-300 text-right">
        Lesson Progress
      </p>

      <div className="mt-1 w-28 h-1.5 rounded-full bg-slate-700 overflow-hidden">

        <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500" />

      </div>

    </div>

  </div>

</div>

    {/* Writing Area */}

    <div className="h-[360px] flex items-center justify-center px-10">

      <div className="text-center space-y-6">

        <div className="text-4xl font-bold text-white">
          2x + 3 = 11
        </div>

        <div className="text-cyan-400 text-3xl">
          ↓
        </div>

        <div className="text-4xl font-bold text-white">
          2x = 8
        </div>

        <div className="text-cyan-400 text-3xl">
          ↓
        </div>

        <div className="text-4xl font-bold text-emerald-400">
          x = 4 ✓
        </div>

      </div>

    </div>

    {/* Speech Bubble */}

    <div className="h-14 px-6 flex items-center bg-[#1b2d4d] border-b border-cyan-400/30">

  {/* Mika Avatar */}

  <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold text-xl flex-shrink-0">
    M
  </div>

  {/* Speech */}

  <p className="ml-6 text-lg text-slate-200 leading-relaxed">
    {lesson.speech}
  </p>

</div>

  </div>
   );
}