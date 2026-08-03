"use client";

import SectionHeading from "./SectionHeading";
import Timeline from "./Timeline";

export default function ExperienceSection() {
  return (
    <section className="relative py-20 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            left-1/2
            top-20
            -translate-x-1/2
            w-[1000px]
            h-[500px]
            rounded-full
            bg-cyan-500/10
            blur-[180px]
          "
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <SectionHeading />

        <Timeline />

      </div>

    </section>
  );
}