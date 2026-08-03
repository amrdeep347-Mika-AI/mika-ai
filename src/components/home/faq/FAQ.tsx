"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import FAQItem from "./FAQItem";
import { faqs } from "./faqData";

export default function FAQ() {
  const [open, setOpen] = useState<number>(1);

  return (
    <section className="relative overflow-hidden py-28">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            left-1/2
            top-24
            -translate-x-1/2
            h-[700px]
            w-[1100px]
            rounded-full
            bg-cyan-500/10
            blur-[180px]
          "
        />

      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          }}
          className="mb-20 text-center"
        >

          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
            FAQ
          </p>

          <h2 className="mt-5 text-5xl font-black leading-tight text-white lg:text-6xl">

            Questions?

            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">

              We've Got Answers.

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-400">

            Everything you need to know about Professor Mika,
            AI learning, classes, progress tracking and more.

          </p>

        </motion.div>

        {/* FAQ */}

        <div className="space-y-5">

          {faqs.map((faq) => (

            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              open={open === faq.id}
              onClick={() =>
                setOpen(open === faq.id ? 0 : faq.id)
              }
            />

          ))}

        </div>

      </div>

    </section>
  );
}