"use client";

import { motion } from "framer-motion";

import { testimonials } from "./data";
import TestimonialRow from "./TestimonialRow";

export default function Testimonials() {
  const topRow = testimonials.slice(0, 6);
  const bottomRow = testimonials.slice(6);

  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            left-1/2
            top-20
            -translate-x-1/2
            h-[700px]
            w-[1200px]
            rounded-full
            bg-cyan-500/10
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            right-20
            bottom-0
            h-[350px]
            w-[350px]
            rounded-full
            bg-blue-500/10
            blur-[140px]
          "
        />

      </div>

      <div className="relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-20 max-w-4xl px-6 text-center"
        >

          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
            TESTIMONIALS
          </p>

          <h2 className="mt-5 text-5xl font-black leading-tight text-white lg:text-6xl">

            Trusted by Students.

            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">

              Loved by Parents.

            </span>

          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-slate-400">

            Thousands of students are already learning with Professor Mika every
            day through AI-powered conversations, quizzes and personalized lessons.

          </p>

        </motion.div>

        {/* Row 1 */}

        <TestimonialRow
          items={topRow}
        />

        <div className="h-8" />

        {/* Row 2 */}

        <TestimonialRow
          items={bottomRow}
          reverse
        />

        {/* Statistics */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .6,
            delay: .2,
          }}
          className="mx-auto mt-24 max-w-7xl px-6"
        >

          <div className="grid gap-6 md:grid-cols-3">

            <div
              className="
                rounded-3xl
                border
                border-cyan-500/20
                bg-gradient-to-b
                from-[#111c2e]
                to-[#0c1424]
                p-10
                text-center
              "
            >

              <h3 className="text-5xl font-black text-white">
                4.9★
              </h3>

              <p className="mt-4 text-slate-400">
                Average Student Rating
              </p>

            </div>

            <div
              className="
                rounded-3xl
                border
                border-cyan-500/20
                bg-gradient-to-b
                from-[#111c2e]
                to-[#0c1424]
                p-10
                text-center
              "
            >

              <h3 className="text-5xl font-black text-white">
                100K+
              </h3>

              <p className="mt-4 text-slate-400">
                Active Students
              </p>

            </div>

            <div
              className="
                rounded-3xl
                border
                border-cyan-500/20
                bg-gradient-to-b
                from-[#111c2e]
                to-[#0c1424]
                p-10
                text-center
              "

            >

              <h3 className="text-5xl font-black text-white">
                1M+
              </h3>

              <p className="mt-4 text-slate-400">
                Lessons Completed
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}