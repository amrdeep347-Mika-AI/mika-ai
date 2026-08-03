"use client";

import ProfessorPanel from "./ProfessorPanel";
import Whiteboard from "./Whiteboard";
import ChatBubble from "./ChatBubble";
import ActionButtons from "./ActionButtons";

export default function ClassroomSection() {
  return (
    <section className="relative py-10 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-10">

          <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm font-semibold">
            EXPERIENCE MIKA AI
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">

            Learn Inside an

            <span className="text-cyan-400">
              {" "}AI Classroom
            </span>

          </h2>

          <p className="mt-3 max-w-1xl mx-auto text-slate-300 text-xl">

            Watch Professor Mika explain concepts exactly like
            a real teacher with an intelligent whiteboard.

          </p>

        </div>

        {/* Classroom */}

        <div className="grid lg:grid-cols-[340px_1fr] gap-6 items-center">

          <ProfessorPanel />

          <Whiteboard />

        </div>

        <div className="mt-10">

          <ChatBubble />

        </div>

        <div className="mt-8">

          <ActionButtons />

        </div>

      </div>

    </section>
  );
}
