"use client";

import {
  BookOpen,
  Calculator,
  FlaskConical,
  Globe,
  Languages,
  ChevronRight,
} from "lucide-react";

const subjects = [
  {
    name: "Mathematics",
    className: "Class 1 - 12",
    icon: Calculator,
    color: "text-cyan-400",
  },
  {
    name: "Science",
    className: "Class 1 - 12",
    icon: FlaskConical,
    color: "text-cyan-400",
  },
  {
    name: "English",
    className: "Class 1 - 12",
    icon: BookOpen,
    color: "text-pink-400",
  },
  {
    name: "Social Science",
    className: "Class 1 - 12",
    icon: Globe,
    color: "text-cyan-400",
  },
  {
    name: "Hindi",
    className: "Class 1 - 12",
    icon: Languages,
    color: "text-emerald-400",
  },
  {
    name: "And Many More",
    className: "Subjects",
    icon: ChevronRight,
    color: "text-cyan-300",
  },
];

export default function CurriculumCard() {
  return (
    <div className="h-[370px] rounded-[10px] border border-cyan-400/20 bg-[#081321]/90 backdrop-blur-xl overflow-hidden">

      {/* Header */}

      <div className="flex items-center justify-between px-7 py-2 border-b border-cyan-400/10">

        <div>
          <h3 className="text-[20px] font-bold text-white leading-none">
            Explore Our Curriculum
          </h3>

          <p className="text-slate-400 mt-1 text-[15px]">
            Learn every NCERT subject
          </p>

        </div>

        <BookOpen
          size={28}
          className="text-cyan-300"
        />

      </div>

      {/* Grid */}

      <div className="grid grid-cols-2 gap-4 px-6 py-5">

        {subjects.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="
                group
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-cyan-400/15
                bg-white/5
                px-4
                py-3
                transition-all
                duration-300
                hover:bg-cyan-500/10
                hover:border-cyan-300
              "
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

                <Icon
                  size={22}
                  className={item.color}
                />

              </div>

              <div className="text-left">

                <h4 className="text-[18px] font-semibold text-white">
                  {item.name}
                </h4>

                <p className="text-slate-400 text-[14px] mt-0.5">
                  {item.className}
                </p>

              </div>

            </button>
          );
        })}

      </div>

    </div>
  );
}