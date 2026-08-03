export interface ConversationMessage {
  role: "student" | "mika";
  text: string;
}

export interface ClassroomBrain {
  lessonTitle: string;

  currentStep: number;

  messages: ConversationMessage[];

  drawings: string[];

  explainedTopics: string[];
}

export function createBrain(
  lessonTitle: string
): ClassroomBrain {
  return {
    lessonTitle,

    currentStep: 1,

    messages: [],

    drawings: [],

    explainedTopics: [],
  };
}