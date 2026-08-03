import { supabaseAdmin } from "@/lib/supabase-admin";
import math from "@/data/curriculum/class-1/mathematics.json";

export async function importChapters() {
  console.log("📖 Importing Chapters...");

  // Find Class 1
  const { data: cls, error: classError } = await supabaseAdmin
    .from("classes")
    .select("id")
    .eq("slug", "class-1")
    .single();

  if (classError || !cls) {
    throw new Error("Class 1 not found");
  }

  // Find Mathematics for Class 1
  const { data: subject, error: subjectError } = await supabaseAdmin
    .from("subjects")
    .select("*")
    .eq("class_id", cls.id)
    .eq("slug", math.slug)
    .single();

  if (subjectError || !subject) {
    throw new Error("Class 1 Mathematics subject not found");
  }

  for (const chapter of math.chapters) {
    const { error } = await supabaseAdmin
      .from("chapters")
      .upsert(
        {
          subject_id: subject.id,
          chapter_number: chapter.number,
          name: chapter.name,
          slug: chapter.slug,
        },
        {
          onConflict: "subject_id,slug",
        }
      );

    if (error) {
      console.error(error);
    } else {
      console.log(`✅ Chapter ${chapter.number}: ${chapter.name}`);
    }
  }
}