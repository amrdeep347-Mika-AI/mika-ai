import type { Lesson } from "@/lib/ai/types";

export const demoLesson: Lesson = {
  title: "Welcome to Mika AI",

  welcomeMessage: "Welcome to Mika AI!",

  lessonHook: "Let's solve a simple equation together.",

  learningObjective: "Learn how to solve a basic linear equation.",

  difficulty: "Easy",

  introduction:
    "Professor Mika will teach you step by step.",

  teachingSteps: [
    {
      title: "Solve the Equation",

      teacherSpeech:
        "Hello! I'm Professor Mika. Welcome to the future of learning.",

      boardInstruction:
        "Write the equation 2x + 3 = 11 and solve it step by step.",

      boardContent: "2x + 3 = 11",

      animation: "draw",

      duration: 5,

      question: "What is the value of x?",

      options: ["2", "4", "6", "8"],

      correctAnswer: "4",

      celebration:
        "Excellent! You solved your first problem with Professor Mika.",
    },
  ],

  examples: ["2x + 3 = 11"],

  keyPoints: [
    "Move constants first.",
    "Divide both sides by the coefficient.",
  ],

  quiz: [
    {
      question: "What is x in 2x + 3 = 11?",
      options: ["2", "4", "6", "8"],
      answer: "4",
    },
  ],

  homework: ["Solve: 3x + 5 = 20"],

  summary:
    "Today you learned how to solve a basic linear equation.",

  goodbyeMessage: "Great job! See you in the next lesson.",
};