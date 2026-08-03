import { ClassroomAction } from "./actionTypes";

interface Handlers {
  speak: (text: string) => Promise<void>;
  draw: (commands: any[]) => Promise<void>;
  erase: () => Promise<void>;
  wait: (ms: number) => Promise<void>;
  animation: (name: string) => Promise<void>;
  question: (text: string) => Promise<void>;
}

export async function runActions(
  actions: ClassroomAction[],
  handlers: Handlers
) {
  for (const action of actions) {
    switch (action.type) {
      case "speak":
        await handlers.speak(action.text);
        break;

      case "draw":
        await handlers.draw(action.commands);
        break;

      case "erase":
        await handlers.erase();
        break;

      case "wait":
        await handlers.wait(action.duration);
        break;

      case "animation":
        await handlers.animation(action.name);
        break;

      case "question":
        await handlers.question(action.text);
        break;
    }
  }
}