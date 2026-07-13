import { supabase } from "@/lib/supabase";
import { Lesson } from "@/lib/ai/types";

export async function getStoredLesson(
  classNumber: number,
  subject: string,
  chapter: string,
  topic: string
): Promise<Lesson | null> {
  const { data, error } = await supabase
    .from("lessons")
    .select("lesson_json")
    .eq("class", classNumber)
    .eq("subject", subject)
    .eq("chapter", chapter)
    .eq("topic", topic)
    .single();

  if (error || !data) return null;

  return data.lesson_json as Lesson;
}

export async function saveLesson(
  classNumber: number,
  subject: string,
  chapter: string,
  topic: string,
  lesson: Lesson
) {
  await supabase.from("lessons").insert({
    class: classNumber,
    subject,
    chapter,
    topic,
    lesson_json: lesson,
  });
}