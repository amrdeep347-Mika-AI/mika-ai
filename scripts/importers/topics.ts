import { supabaseAdmin } from "@/lib/supabase-admin";
import math from "../../data/curriculum/class-1/mathematics.json";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function importTopics() {
  console.log("📝 Importing Topics...");

  for (const chapter of math.chapters) {
    const { data: dbChapter } = await supabaseAdmin
      .from("chapters")
      .select("*")
      .eq("slug", chapter.slug)
      .single();

    if (!dbChapter) continue;

    for (const topic of chapter.topics) {
      const { error } = await supabaseAdmin
        .from("topics")
        .upsert(
          {
            chapter_id: dbChapter.id,
            name: topic,
            slug: slugify(topic),
          },
          {
            onConflict: "chapter_id,slug",
          }
        );

      if (error) {
        console.error(error);
      } else {
        console.log(`   ✅ ${topic}`);
      }
    }
  }
}