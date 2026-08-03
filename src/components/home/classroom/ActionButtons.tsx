"use client";

export default function ActionButtons() {
  return (
    <div className="flex gap-4">
      <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white">
        Ask Mika
      </button>

      <button className="rounded-xl border border-cyan-500 px-6 py-3 text-cyan-400">
        Start Lesson
      </button>
    </div>
  );
}