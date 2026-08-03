import { WhiteboardCommand } from "@/lib/whiteboard/types";

export type ClassroomAction =
  | {
      type: "speak";
      text: string;
    }
  | {
      type: "draw";
      commands: WhiteboardCommand[];
    }
  | {
      type: "erase";
    }
  | {
      type: "wait";
      duration: number;
    }
  | {
      type: "animation";
      name:
        | "wave"
        | "point"
        | "smile"
        | "celebrate"
        | "thinking";
    }
  | {
      type: "question";
      text: string;
    };