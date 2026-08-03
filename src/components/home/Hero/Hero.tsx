"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroProfessor from "./HeroProfessor";
//import HeroProfessor from "./HeroProfessorPremium";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-30 pb-4">
      <HeroBackground />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-16">
        <div className="grid lg:grid-cols-2 gap-24 items-center min-h-[85vh]">
          {/* Left Content */}
          <HeroContent />

          {/* Right Professor */}
          <HeroProfessor />
        </div>
      </div>
    </section>
  );
}