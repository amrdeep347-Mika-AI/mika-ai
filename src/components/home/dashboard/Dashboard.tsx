"use client";

import ClassroomCard from "./ClassroomCard";
import CurriculumCard from "./CurriculumCard";
import TestimonialCard from "./TestimonialCard";
import PricingRow from "./PricingRow";
import CtaCard from "./CtaCard";

export default function Dashboard() {
  return (
    <section className="relative pb-10">

      <div className="max-w-[1600px] mx-auto px-6">

        {/* TOP DASHBOARD */}
        <div className="grid grid-cols-12 gap-5">

          <div className="col-span-4">
            <ClassroomCard />
          </div>

          <div className="col-span-5">
            <CurriculumCard />
          </div>

          <div className="col-span-3">
            <TestimonialCard />
          </div>

        </div>

        {/* PRICING */}
        <div className="grid grid-cols-12 gap-5 mt-10">

          <div className="col-span-8">
            <PricingRow />
          </div>

          <div className="col-span-4">
            <CtaCard />
          </div>

        </div>

      </div>

    </section>
  );
}