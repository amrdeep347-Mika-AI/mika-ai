"use client";

import SectionHeading from "./SectionHeading";
import SubjectCard from "./SubjectCard";

import {
  Calculator,
  FlaskConical,
  Globe,
  Atom,
  Dna,
  Code2,
  BookOpen,
  Brain,
  Briefcase,
} from "lucide-react";

const subjects = [
  {
    icon: Calculator,
    title: "Mathematics",
    lessons: "500+ Interactive Lessons",
    description:
      "Master algebra, geometry, fractions, calculus and problem solving with Mika.",
    color: "#22d3ee",
  },
  {
    icon: FlaskConical,
    title: "Science",
    lessons: "350+ Interactive Lessons",
    description:
      "Learn science through animations, experiments and AI explanations.",
    color: "#38bdf8",
  },
  {
    icon: Globe,
    title: "Geography",
    lessons: "200+ Visual Lessons",
    description:
      "Explore Earth, maps, climate and countries with interactive learning.",
    color: "#34d399",
  },
  {
    icon: Atom,
    title: "Physics",
    lessons: "300+ Smart Lessons",
    description:
      "Understand forces, motion, electricity and modern physics visually.",
    color: "#60a5fa",
  },
  {
    icon: Dna,
    title: "Biology",
    lessons: "280+ AI Lessons",
    description:
      "Study cells, plants, animals and the human body with animations.",
    color: "#10b981",
  },
  {
    icon: Code2,
    title: "Coding",
    lessons: "Python • JavaScript • AI",
    description:
      "Learn programming with an AI mentor that helps you write code.",
    color: "#8b5cf6",
  },
  {
    icon: BookOpen,
    title: "English",
    lessons: "Grammar & Literature",
    description:
      "Improve grammar, vocabulary, writing and spoken English naturally.",
    color: "#f59e0b",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    lessons: "Future Skills",
    description:
      "Understand AI, machine learning and prompt engineering from scratch.",
    color: "#06b6d4",
  },
  {
    icon: Briefcase,
    title: "Commerce",
    lessons: "Business & Finance",
    description:
      "Learn accounting, economics and finance with practical examples.",
    color: "#22c55e",
  },
];

export default function SubjectsSection() {
  return (
    <section className="relative py-8">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">

          {subjects.map((subject) => (
            <SubjectCard
              key={subject.title}
              {...subject}
            />
          ))}

        </div>

      </div>

    </section>
  );
}