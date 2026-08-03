"use client";

import {
  MessageSquare,
  User,
  Send,
  Bot,
} from "lucide-react";

export default function ClassroomCard() {
  return (
    <div className="relative h-[365px] rounded-[10px] border border-cyan-400/20 bg-[#081321]/90 backdrop-blur-xl overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-400/10">

        <h3 className="text-xl font-bold text-white">
          Interactive Classroom Preview
        </h3>

        <MessageSquare
          className="text-cyan-400"
          size={26}
        />

      </div>

      <div className="grid grid-cols-[60px_1fr_160px] h-[285px]">

        {/* Sidebar */}

        <div className="border-r border-cyan-400/10 flex flex-col items-center gap-4 py-5">

          {[User, Bot, MessageSquare].map((Icon, i) => (

            <div
              key={i}
              className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center"
            >
              <Icon
                size={18}
                className="text-cyan-300"
              />
            </div>

          ))}

        </div>

        {/* Chat */}

        <div className="flex flex-col justify-between p-5">

          <div className="space-y-4">

            <div className="flex gap-3">

              <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-black">
                M
              </div>

              <div>

                <h4 className="text-white font-semibold">
                  Professor Mika
                </h4>

                <p className="text-slate-400 text-sm mt-1 leading-6">

                  Hello! Today we'll solve
                  Linear Equations together.

                </p>

              </div>

            </div>

            <div className="ml-12 inline-block rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-white text-sm">

              Explain Linear Equations

            </div>

            <div className="flex gap-3">

              <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-black">
                M
              </div>

              <div>

                <h4 className="text-white font-semibold">
                  Professor Mika
                </h4>

                <p className="text-slate-400 text-sm mt-2 leading-7">

                  Sure!
                  Linear equations are equations
                  of the form ax + b = c.

                </p>

              </div>

            </div>

          </div>

          {/* Input */}

          <div className="relative mt-4">

            <input
              placeholder="Ask Mika anything..."
              className="
                w-full
                rounded-xl
                border
                border-cyan-400/20
                bg-white/5
                px-5
                py-4
                text-white
                outline-none
              "
            />

            <button
              className="
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                w-10
                h-10
                rounded-xl
                bg-cyan-500
                flex
                items-center
                justify-center
              "
            >
              <Send
                size={18}
                className="text-black"
              />
            </button>

          </div>

        </div>

        {/* Whiteboard */}

        <div className="border-l border-cyan-400/10 flex items-center justify-center">

          <div className="w-[135px] h-[205px] rounded-xl border border-cyan-400/20 bg-gradient-to-b from-[#081b2c] to-[#0a1020] relative overflow-hidden">

            <div className="absolute inset-0 opacity-25">

              <div className="grid grid-cols-6 h-full">

                {Array.from({ length: 36 }).map((_, i) => (
                  <div
                    key={i}
                    className="border border-cyan-500/10"
                  />
                ))}

              </div>

            </div>

            <svg
              className="absolute inset-0"
              viewBox="0 0 140 230"
            >
              <line
                x1="25"
                y1="40"
                x2="120"
                y2="150"
                stroke="#22d3ee"
                strokeWidth="3"
              />

              <circle
                cx="25"
                cy="40"
                r="4"
                fill="#22d3ee"
              />

              <circle
                cx="120"
                cy="150"
                r="4"
                fill="#22d3ee"
              />

            </svg>

          </div>

        </div>

      </div>

    </div>
  );
}