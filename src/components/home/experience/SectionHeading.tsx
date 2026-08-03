"use client";

export default function SectionHeading() {
  return (
    <div className="mb-16 text-center">

      <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-cyan-400">
        EXPERIENCE MIKA AI
      </p>

      <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white">

        Learn Smarter.

        <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Every Step Guided by AI.
        </span>

      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
        From asking a question to mastering a topic, Professor Mika guides
        every learning step with personalized AI teaching.
      </p>

    </div>
  );
}