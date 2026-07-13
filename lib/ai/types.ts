export interface LessonStep {
  title: string;
  explanation: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface Lesson {
  title: string;

  introduction: string;

  teachingSteps: LessonStep[];

  examples: string[];

  keyPoints: string[];

  quiz: QuizQuestion[];

  homework: string[];

  summary: string;
}