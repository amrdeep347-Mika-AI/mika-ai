import { ai } from "../gemini";
import { lessonPrompt } from "../prompts/lesson";
import { parseJson } from "../utils/parseJson";
import { Lesson } from "../types";

interface GenerateLessonParams {
  classNumber: number;
  subject: string;
  chapter: string;
  topic: string;
}

export async function generateLesson({
  classNumber,
  subject,
  chapter,
  topic,
}: GenerateLessonParams): Promise<Lesson> {
  const prompt = lessonPrompt(
    classNumber.toString(),
    subject,
    chapter,
    topic
  );

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text ?? "";

  return parseJson<Lesson>(text);
}