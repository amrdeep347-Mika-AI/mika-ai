export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Can Mika replace tuition?",
    answer:
      "Professor Mika provides personalized AI teaching, visual explanations, quizzes, practice sessions and continuous guidance. While every learner has different needs, Mika is designed to become your personal teacher available anytime.",
  },
  {
    id: 2,
    question: "Which classes are supported?",
    answer:
      "Mika supports the complete NCERT curriculum from Class 1 to Class 12 and is continuously expanding to competitive exams like JEE, NEET, CUET and Olympiads.",
  },
  {
    id: 3,
    question: "Does Mika teach in Hindi and English?",
    answer:
      "Yes. Students can learn in English, Hindi, or a combination of both. Mika adjusts explanations according to the student's preferred language.",
  },
  {
    id: 4,
    question: "Can Mika prepare me for JEE & NEET?",
    answer:
      "Yes. Along with school learning, Mika is designed to support competitive exam preparation using AI-generated explanations, practice questions and adaptive revision.",
  },
  {
    id: 5,
    question: "Does Mika remember my progress?",
    answer:
      "Yes. Mika tracks completed lessons, quiz scores, strengths, weaknesses and learning history so future lessons become more personalized.",
  },
  {
    id: 6,
    question: "Can parents monitor learning?",
    answer:
      "Yes. Parents will be able to view learning progress, study time, completed lessons and performance reports through a dedicated dashboard.",
  },
  {
    id: 7,
    question: "Does Mika work on mobile devices?",
    answer:
      "Absolutely. Mika is designed to work beautifully on desktops, tablets and smartphones so students can learn anywhere.",
  },
  {
    id: 8,
    question: "Is an internet connection required?",
    answer:
      "Yes. Since Mika uses AI to generate personalized lessons and explanations, an internet connection is required for the best learning experience.",
  },
];