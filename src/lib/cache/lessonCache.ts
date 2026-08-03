import { generateLesson } from "@/lib/ai/services/lessonGenerator";
import { getStoredLesson, saveLesson } from "@/lib/db/lessons";
import { Lesson } from "@/lib/ai/types";

interface LessonRequest {
  classNumber: number;
  subject: string;
  chapter: string;
  topic: string;
}

export async function getLesson(
  params: LessonRequest
): Promise<Lesson> {
  // 1. Check database first
  const storedLesson = await getStoredLesson(
    params.classNumber,
    params.subject,
    params.chapter,
    params.topic
  );

  if (storedLesson) {
    console.log("📚 Lesson loaded from Supabase");

    return storedLesson;
  }

  console.log("🤖 Generating lesson with Gemini...");

  // 2. Generate using Gemini
  const lesson = await generateLesson({
    classNumber: params.classNumber,
    subject: params.subject,
    chapter: params.chapter,
    topic: params.topic,
  });

  // 3. Save to Supabase
  await saveLesson(
    params.classNumber,
    params.subject,
    params.chapter,
    params.topic,
    lesson
  );

  console.log("✅ Lesson saved to Supabase");

  // 4. Return lesson
  return lesson;
}