"use client";

import { WhiteboardCommand } from "@/lib/whiteboard/types";
import { renderCommand } from "@/lib/whiteboard/renderer";

interface Props {
  instruction: string;
  animation: string;
  commands?: WhiteboardCommand[];
}

export default function Whiteboard({
  instruction,
  commands = [],
}: Props) {
  return (
    <div className="rounded-3xl bg-white border border-slate-200 shadow-xl p-8 min-h-[600px]">

      <div className="flex items-center justify-between mb-6">

    <h2 className="text-3xl font-black">
        📝 Smart Whiteboard
    </h2>

    <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold">
        Live Drawing
    </span>

</div>

      {commands.length === 0 ? (
        <div className="text-lg whitespace-pre-wrap text-slate-700">
          {instruction}
        </div>
      ) : (
        <svg
    width="100%"
    height="560"
          viewBox="0 0 1000 560"
          className="rounded-2xl border-2 border-slate-300 bg-slate-50 shadow-inner"
        >
          {commands.map((command, index) =>
            renderCommand(command, index)
          )}
        </svg>
      )}

    </div>
  );
}