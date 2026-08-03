"use client";

import {
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

export default function TestimonialCard() {
  return (
    <div className="relative h-[370px] rounded-[10px] border border-cyan-400/20 bg-[#081321]/90 backdrop-blur-xl overflow-hidden">

      {/* Header */}

      <div className="flex items-center justify-between px-7 py-1 border-b border-cyan-400/10">

        <h3 className="text-[20px] font-bold text-white">
          Why Students Love Mika
        </h3>

        <div className="flex gap-2">

          <button className="w-9 h-6 rounded-full border border-cyan-400/20 flex items-center justify-center text-cyan-300 hover:bg-cyan-500/10 transition">

            <ChevronLeft size={18} />

          </button>

          <button className="w-9 h-6 rounded-full border border-cyan-400/20 flex items-center justify-center text-cyan-300 hover:bg-cyan-500/10 transition">

            <ChevronRight size={18} />

          </button>

        </div>

      </div>

      <div className="p-7 flex flex-col justify-between h-[300px]">

        {/* Stars */}

        <div className="flex gap-1">

          {Array.from({ length: 5 }).map((_, i) => (

            <Star
              key={i}
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />

          ))}

        </div>

        {/* Review */}

        <p className="text-slate-300 leading-8 text-[15px] mt-3">

          Mika explains everything so well!
          It's like having a personal teacher
          who is always there for me.

        </p>

        {/* Student */}

        <div className="flex items-center gap-4 mt-6">

          <img
            src="https://i.pravatar.cc/80?img=32"
            alt="Student"
            className="w-14 h-14 rounded-full object-cover border border-cyan-400/30"
          />

          <div>

            <h4 className="text-white font-semibold">
              Ananya Sharma
            </h4>

            <p className="text-slate-400 text-sm">
              Class 8
            </p>

          </div>

        </div>

        {/* Dots */}

        <div className="flex justify-center gap-1 mt-4">

          <div className="w-6 h-1 rounded-full bg-cyan-400" />

          <div className="w-2 h-2 rounded-full bg-slate-600" />

          <div className="w-2 h-2 rounded-full bg-slate-600" />

          <div className="w-2 h-2 rounded-full bg-slate-600" />

        </div>

      </div>

    </div>
  );
}