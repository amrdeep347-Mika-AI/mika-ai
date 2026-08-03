export interface Testimonial {
  id: number;
  name: string;
  initials: string;
  grade: string;
  review: string;
  rating: number;
  gradient: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    initials: "PS",
    grade: "Class 10",
    rating: 5,
    gradient: "from-cyan-400 to-blue-600",
    review:
      "Professor Mika explains every topic so clearly that studying finally became enjoyable.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    initials: "RV",
    grade: "Class 8",
    rating: 5,
    gradient: "from-violet-500 to-indigo-600",
    review:
      "Math used to scare me. Now I actually enjoy solving difficult questions.",
  },
  {
    id: 3,
    name: "Aarav Patel",
    initials: "AP",
    grade: "Class 12",
    rating: 5,
    gradient: "from-emerald-400 to-green-600",
    review:
      "It feels like having a personal AI tutor available 24 hours a day.",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    initials: "SG",
    grade: "Class 9",
    rating: 5,
    gradient: "from-pink-500 to-rose-600",
    review:
      "Science became incredibly easy because Mika explains everything visually.",
  },
  {
    id: 5,
    name: "Kabir Mehta",
    initials: "KM",
    grade: "JEE Aspirant",
    rating: 5,
    gradient: "from-orange-400 to-red-500",
    review:
      "Better explanations than YouTube. I save hours every week while preparing.",
  },
  {
    id: 6,
    name: "Diya Singh",
    initials: "DS",
    grade: "Class 11",
    rating: 5,
    gradient: "from-sky-400 to-cyan-600",
    review:
      "Whenever I don't understand something, Mika explains it in another way until I do.",
  },
  {
    id: 7,
    name: "Rohan Kumar",
    initials: "RK",
    grade: "NEET Aspirant",
    rating: 5,
    gradient: "from-lime-400 to-emerald-600",
    review:
      "Biology became my strongest subject thanks to Professor Mika.",
  },
  {
    id: 8,
    name: "Ananya Roy",
    initials: "AR",
    grade: "Class 6",
    rating: 5,
    gradient: "from-fuchsia-500 to-purple-600",
    review:
      "Learning feels like playing a game. I never get bored anymore.",
  },
  {
    id: 9,
    name: "Ishaan Kapoor",
    initials: "IK",
    grade: "Class 7",
    rating: 5,
    gradient: "from-yellow-400 to-orange-500",
    review:
      "The quizzes make revision super easy before every school exam.",
  },
  {
    id: 10,
    name: "Meera Joshi",
    initials: "MJ",
    grade: "Class 9",
    rating: 5,
    gradient: "from-teal-400 to-cyan-600",
    review:
      "Professor Mika actually remembers where I get stuck and helps me improve.",
  },
  {
    id: 11,
    name: "Aditya Rao",
    initials: "AR",
    grade: "Class 11",
    rating: 5,
    gradient: "from-indigo-500 to-blue-600",
    review:
      "The AI explanations are clearer than many coaching classes I've attended.",
  },
  {
    id: 12,
    name: "Neha Jain",
    initials: "NJ",
    grade: "Class 8",
    rating: 5,
    gradient: "from-rose-500 to-pink-600",
    review:
      "I never thought studying could actually be this much fun.",
  },
];