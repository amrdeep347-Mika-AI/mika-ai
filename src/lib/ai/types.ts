export interface TeachingStep {
  title: string;

  teacherSpeech: string;

  boardInstruction: string;

  boardContent: string;

  animation:
    | "draw"
    | "highlight"
    | "fade"
    | "circle"
    | "arrow"
    | "erase";

  duration: number;

  question: string;

  options: string[];

  correctAnswer: string;

  celebration: string;
}

export interface QuizQuestion {
  question: string;

  options: string[];

  answer: string;
}

export interface Lesson {
  title: string;

  welcomeMessage: string;

  lessonHook: string;

  learningObjective: string;

  difficulty: string;

  introduction: string;

  teachingSteps: TeachingStep[];

  examples: string[];

  keyPoints: string[];

  quiz: QuizQuestion[];

  homework: string[];

  summary: string;

  goodbyeMessage: string;
}