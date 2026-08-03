import { supabaseAdmin } from "@/lib/supabase-admin";
import subjects from "../../data/curriculum/subjects.json";

export async function importSubjects() {
  console.log("📚 Importing Subjects...");

  const { data: classes } = await supabaseAdmin
    .from("classes")
    .select("*");

  if (!classes) {
    throw new Error("No classes found");
  }

  for (const subject of subjects) {
    const cls = classes.find(c => c.slug === subject.classId);

    if (!cls) {
      console.log(`❌ Missing class: ${subject.classId}`);
      continue;
    }

    const { error } = await supabaseAdmin
      .from("subjects")
      .upsert(
        {
          class_id: cls.id,
          name: subject.name,
          slug: subject.slug,
          icon: subject.icon,
        },
        {
          onConflict: "class_id,slug",
        }
      );

    if (error) {
      console.error(error);
    } else {
      console.log(`✅ ${cls.name} → ${subject.name}`);
    }
  }
}