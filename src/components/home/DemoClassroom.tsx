"use client";

import HeroProfessor from "./Hero/HeroProfessor";

export default function DemoClassroom() {
  return (
    <section className="relative py-28">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold">
            EXPERIENCE MIKA AI
          </p>

          <h2 className="mt-4 text-5xl lg:text-6xl font-black text-white">
            Learn Inside an
            <span className="text-cyan-400"> AI Classroom</span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-slate-400 text-xl">
            Watch Professor Mika explain concepts exactly like a real teacher.
          </p>

        </div>

        <div className="grid lg:grid-cols-[430px_1fr] gap-12 items-center">

          <HeroProfessor />

          <div
            className="
              h-[650px]
              rounded-[40px]
              border border-cyan-500/20
              bg-white/[0.03]
              backdrop-blur-3xl
              relative
              overflow-hidden
            "
          >
          </div>

        </div>

      </div>
    </section>
  );
}