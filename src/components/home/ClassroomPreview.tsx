"use client";

import Classroom from "@/components/classroom/Classroom";

export default function ClassroomPreview() {
  return (
    <section className="relative py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold">
            EXPERIENCE MIKA AI
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Your Classroom,
            <span className="text-cyan-400"> Reimagined</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 text-lg leading-8">
            Learn with an AI teacher that explains,
            remembers, listens and adapts in real time.
          </p>

        </div>

        {/* Classroom Demo */}

<div className="rounded-[40px] overflow-hidden border border-cyan-500/20 bg-white/[0.02] backdrop-blur-3xl">

  <Classroom mode="demo" />

</div>

      </div>

    </section>
  );
}