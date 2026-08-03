import type { Lesson } from "@/lib/ai/types";

export const demoLesson: Lesson = {
  title: "Welcome to Mika AI",

  teachingSteps: [
    {
      speech:
        "Hello! I'm Professor Mika. Welcome to the future of learning.",

      boardInstruction:
        "Write the equation 2x + 3 = 11 and solve it step by step.",

      animation: "write",

      question: "What is the value of x?",

      options: ["2", "4", "6", "8"],

      correctAnswer: "4",

      celebration:
        "Excellent! You solved your first problem with Professor Mika.",
    },
  ],
};