"use client";

import {
  Brain,
  BookOpen,
  Clock3,
  Gamepad2,
  UserRound,
} from "lucide-react";

const features = [
  {
    icon: UserRound,
    title: "Understands You",
    desc: "AI adapts to your learning style",
  },
  {
    icon: BookOpen,
    title: "Explains Better",
    desc: "Complex topics made simple",
  },
  {
    icon: Brain,
    title: "Remembers You",
    desc: "Tracks your progress",
  },
  {
    icon: Clock3,
    title: "Teaches 24/7",
    desc: "Always available",
  },
  {
    icon: Gamepad2,
    title: "Interactive",
    desc: "Quizzes & activities",
  },
];

export default function FeatureStrip() {
  return (
    <section className="relative -mt-8 z-20 pb-12">

      <div className="max-w-[1600px] mx-auto px-0">

        <div
          className="
            grid
            grid-cols-5
            rounded-[6px]
            overflow-hidden
            border
            border-cyan-500/15
            bg-[#081321]/90
            backdrop-blur-2xl
          "
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`
                  flex
                  items-center
                  gap-5
                  px-8
                  py-6
                  transition-all
                  duration-300
                  hover:bg-cyan-500/5
                  ${
                    index !== features.length - 1
                      ? "border-r border-cyan-500/15"
                      : ""
                  }
                `}
              >
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-cyan-500/10
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                  "
                >
                  <Icon
                    size={22}
                    className="text-cyan-300"
                  />
                </div>

                <div>

                  <h3 className="text-white font-semibold text-base">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400 leading-5">
                    {item.desc}
                  </p>

                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}